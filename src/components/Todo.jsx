import React from 'react'

const Todo = ({todo, toggleComplete, handleDelete, handleEdit}) => {
  console.log(todo);
  const [newTitle, setNewTitle] = React.useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.text);
    } else {
      todo.text = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div>
      <p style={{ textDecoration: todo.completed && "line-through" }}>{todo.text}</p>
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          completed
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          delete
        </button>
      </div>
    </div>
  )
}

export default Todo