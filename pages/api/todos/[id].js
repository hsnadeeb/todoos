// pages/api/todos/[id].js
import { MongoClient, ObjectId } from 'mongodb';

const uri = 'mongodb+srv://shaz:YaEvs1cXGsw56jB9@todoos.1wqp0k6.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;

  try {
    await client.connect();
    const database = client.db('todoos');
    const collection = database.collection('todos');

    switch (method) {
      case 'GET':
        const todo = await collection.findOne({ _id: new ObjectId(id) });

        if (!todo) {
          return res.status(404).json({ success: false, error: 'Todo not found' });
        }
        
        // Continue with the rest of the code using `todo`...
        
        res.status(200).json({ success: true, data: todo });
        break;

      case 'PUT':
        const updatedTodo = await collection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: body },
          { returnDocument: 'after' }
        );
        if (!updatedTodo.value) {
          return res.status(404).json({ success: false, error: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: updatedTodo.value });
        break;

      case 'DELETE':
        const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });
        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({ success: false, error: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: {} });
        break;

      default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  } finally {
    await client.close();
  }
}





// // pages/api/todos/[id].js
// import { MongoClient, ObjectId } from 'mongodb';

// const uri = 'mongodb+srv://shaz:YaEvs1cXGsw56jB9@todoos.1wqp0k6.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// export default async function handler(req, res) {
//   const {
//     query: { id },
//     method,
//     body,
//   } = req;

//   try {
//     await client.connect();
//     const database = client.db('todoos');
//     const collection = database.collection('todos');

//     switch (method) {
//       case 'GET':
//         const todo = await collection.findOne({ _id: new ObjectId(id) });
//         if (!todo) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: todo });
//         break;

//       case 'PUT':
//         const updatedTodo = await collection.findOneAndUpdate(
//           { _id: new ObjectId(id) },
//           { $set: body },
//           { returnDocument: 'after' }
//         );
//         if (!updatedTodo.value) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: updatedTodo.value });
//         break;

//       case 'DELETE':
//         const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });
//         if (deleteResult.deletedCount === 0) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: {} });
//         break;

//       default:
//         res.status(405).json({ success: false, error: 'Method not allowed' });
//         break;
//     }
//   } catch (error) {
//     console.error('Error in API route:', error);
//     res.status(500).json({ success: false, error: 'Server Error' });
//   } finally {
//     await client.close();
//   }
// }
