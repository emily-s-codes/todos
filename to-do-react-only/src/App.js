import './App.css';
import React, { useState } from 'react';
import ItemsList from "./components/ItemsList"

function App() {
  const [newItem, setNewItem] = useState("")
  const [list, setList] = useState([])
  const [complete, setComplete] = useState(false)
  const [count, setCount] = useState(0)

  const updateList = () => {
    setList([...list, newItem])
    setCount(count + 1)
    setNewItem("")
  }



  return (
    <div className="App">
      <h1>front-end-only to-do list</h1>
      <p>Remaining to-dos: {count}</p>
      <section className="inputSection">
        <input type="text" placeholder="to-do" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit" onClick={updateList}>Submit</button>
      </section>
      <ItemsList newItem={newItem} setNewItem={setNewItem} list={list} setList={setList} complete={complete} setComplete={setComplete} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
