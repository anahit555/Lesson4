import React, { memo } from "react"

const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through"
};

function TodoItem(props) {
    const { item, handleChange } = props;
    const {
        text,
        completed,
        id: itemId,
    } = item;

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleChange(itemId)}
            />
            <p style={completed ? completedStyle : null}>
                {text}
            </p>
        </div>
    );
}

export default memo(TodoItem);
