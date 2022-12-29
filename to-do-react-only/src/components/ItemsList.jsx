import React from "react";
import SingleItem from "./SingleItem";

const ItemsList = (props) => {
    const list = props.list
    const count = props.count
    const setCount = props.setCount

    return (
        <ul>
            {list.map((item, key) => {
                return (
                    <SingleItem item={item} count={count} setCount={setCount} />
                )
            })}
        </ul >
    );
}

export default ItemsList;