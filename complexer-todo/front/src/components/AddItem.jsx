import { useState } from "react"

const AddItem = (props) => {
    const [item, setItem] = useState("")
    const itemStatus = props.itemStatus
    const setItemStatus = props.setItemStatus
    const setCount = props.setCount
    const count = props.count
    const addItem = () => {
        fetch('http://localhost:9898/list', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ item, itemStatus })
        })
        setItem("")
        setCount(count + 1)
    }

    const setFunction = (e) => {
        setItem(e.target.value)
        setItemStatus(false)
    }

    return (
        <div>
            <input type="text" placeholder="to-do" value={item} onChange={setFunction} />
            <button onClick={addItem}>Submit</button>
        </div>
    );
}

export default AddItem;