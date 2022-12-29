import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import Item from "./Item"

const ToDoList = () => {
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    const [itemStatus, setItemStatus] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9898/list')
            .then(response => response.json())
            .then(data => setList(data))
    })

    return (<>
        <h1>To Do</h1>
        <p>Remaining items: {count}</p>
        <AddItem count={count} setCount={setCount} itemStatus={itemStatus} setItemStatus={setItemStatus} />
        {list.map((item, key) => {
            return <Item key={key} item={item} count={count} setCount={setCount} itemStatus={itemStatus} setItemStatus={setItemStatus} />
        })}
    </>);
}

export default ToDoList;