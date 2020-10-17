import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      {
        id: todos.length ? todos[0].id + 1 : 1,
        content: newTodo,
        done: false,
      },
      ...todos
    ]);
    setNewTodo('');
  }, [newTodo, todos]);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  const addTodo = useCallback((todo, index) => (event) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.done
    });
    setTodos(newTodos);
  }, [todos]);

  const removeTodo = useCallback((todo) => (event) => {
    setTodos(todos.filter(otherTodo => otherTodo !== todo));
  }, [todos]);

  const markAllDone = useCallback(() => {
    // create a copy of the array
      // create a copy of each of the items
        // update the done property to be true on each of the new items
    const updatedTodos = todos.map(todo => {
      return {
        ...todo,
        done: true,
      };
    });
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div>
      <div id="navBar">TODO APP</div>
      <div id="bodyBackground">
      <label htmlFor="newTodo">Enter a Todo:</label>
      <form onSubmit={formSubmitted}>
        <input
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
          placeholder="New todo item"
        />
        <button>Add Todo</button>
        <button onClick={markAllDone}>Mark All Done</button>
      </form>
      </div>
      <div id="todo_list">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input
              checked={todo.done}
              type="checkbox"
              onChange={addTodo(todo, index)}
            />
            <span className={todo.done ? 'done' : ''}>{todo.content}</span>
            <button onClick={removeTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};



export default App;