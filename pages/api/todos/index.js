// pages/api/todos/index.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://shaz:YaEvs1cXGsw56jB9@todoos.1wqp0k6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db('todoos');
    const collection = database.collection('todos');

    if (req.method === 'GET') {
      const todos = await collection.find({}).toArray();
      res.status(200).json({ success: true, data: todos });
    } else if (req.method === 'POST') {
      const { text } = req.body;
      const todo = await collection.insertOne({ text });
      res.status(201).json({ success: true, data: todo.ops[0] });
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  } finally {
    await client.close();
  }
}
