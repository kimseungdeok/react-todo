import React, { Component } from "react";

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <div>TodoItemList</div>
            </div>
        );
    }
}

export default TodoItemList;

