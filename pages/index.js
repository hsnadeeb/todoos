// pages/index.js
import { useState, useEffect } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null); 
  const [editedText, setEditedText] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      const data = await response.json();
      if (data.success) {
        setTodos(data.data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTodo }),
      });

      const data = await response.json();
      if (data.success) {
        setTodos([...todos, data.data]);
        setNewTodo('');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const editTodo = async (id) => {
    const editedText = prompt('Edit todo:', editingTodo.text);
    if (editedText !== null) {
      try {
        const response = await fetch(`/api/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: editedText }),
        });

        const data = await response.json();
        if (data.success) {
          const updatedTodos = todos.map((todo) =>
            todo._id === id ? { ...todo, text: editedText } : todo
          );
          setTodos(updatedTodos);
          setEditingTodo(null);
        }
      } catch (error) {
        console.error('Error editing todo:', error);
      }
    }
  };

  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        const response = await fetch(`/api/todos/${id}`, {
          method: 'DELETE',
        });

        const data = await response.json();
        if (data.success) {
          const updatedTodos = todos.filter((todo) => todo._id !== id);
          setTodos(updatedTodos);
        }
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [setNewTodo]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {editingTodo === todo ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => editTodo(todo._id)}>Save</button>
                <button onClick={() => setEditingTodo(null)}>Cancel</button>
              </>
            ) : (
              <>
                <div>{todo.text}</div>
                <div>
                  <button onClick={() => setEditingTodo(todo)}>Edit</button>
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
