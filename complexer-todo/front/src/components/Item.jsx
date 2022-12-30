import { useState } from "react"

const Item = (props) => {
    const item = props.item
    const [complete, setComplete] = useState("")
    const count = props.count
    const setCount = props.setCount
    const task = item.task

    const handleToggle = (e) => {
        console.log('toggled')
        setComplete(!complete)
        setCount(complete ? count + 1 : count - 1)
    }

    return (
        <li onClick={handleToggle} className={complete ? "complete" : ""}>
            {task}
        </li>
    );
}

export default Item;