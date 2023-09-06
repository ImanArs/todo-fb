import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase';

const AddTodo = () => {
  const [text, setText] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text !== "") {
      await addDoc(collection(db, "todos"), {
        text,
        completed: false,
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" placeholder='Enter todo...' id="" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  )
}

export default AddTodo