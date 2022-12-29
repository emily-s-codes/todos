import { useState } from "react"

const SingleItem = (props) => {
    const item = props.item
    const [complete, setComplete] = useState(false)
    const count = props.count
    const setCount = props.setCount

    const toggleComplete = (e) => {
        setComplete(!complete)
        setCount(complete ? count + 1 : count - 1)
    }
    return (
        <li onClick={toggleComplete} className={complete ? "complete" : ""}>
            {item}
        </li>
    );
}

export default SingleItem;