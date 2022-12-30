import { useState } from "react"

const AddItem = (props) => {
    const [item, setItem] = useState({})
    const [id, setId] = useState(props.list.length)
    const [task, setTask] = useState("")
    const complete = props.complete
    const setComplete = props.setComplete
    const addTask = props.addTask
    const setCount = props.setCount
    const count = props.count

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9898/list', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ id, task, complete })
        })
        setTask("")
        setCount(count + 1)
        addTask(item)
    }

    const setFunction = (e) => {
        setTask(e.target.value)
        setId(props.list.length + 1)
        setComplete(false)
        setItem(id, task, complete)
    }

    return (
        <div>
            <input type="text" placeholder="to-do" value={task} onChange={setFunction} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddItem;