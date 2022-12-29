import { useState } from "react"

const Item = (props) => {
    const item = props.item
    const setCount = props.setCount
    const count = props.count
    const itemStatus = props.itemStatus
    const setItemStatus = props.setItemStatus
    const [complete, setComplete] = useState(false)

    const toggleComplete = (e) => {
        setComplete(!complete)
        setCount(complete ? count + 1 : count - 1)
        setItemStatus(!itemStatus)
    }
    return (
        <li onClick={toggleComplete} className={complete ? "complete" : ""}>
            {item.item}
        </li>
    );
}

export default Item;