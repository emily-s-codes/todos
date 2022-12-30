import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import Item from "./Item"

const ToDoList = (props) => {
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    const [strike, setStrike] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9898/list')
            .then(response => response.json())
            .then(data => setList(data))
        setCount(list.length)
    }, [list.length])


    const addTask = (item) => {
        let listCopy = [...list]
        listCopy = [...list, item]
        setList(listCopy)
    }



    return (
        <section className='listSection'>
            <p>Remaining tasks: {count}</p>
            <AddItem count={count} setCount={setCount} addTask={addTask} list={list} />
            {list.map((item, key) => {
                return <Item key={key} item={item} count={count} setCount={setCount} strike={strike} setStrike={setStrike} />
            })}
        </section>
    );
}

export default ToDoList;