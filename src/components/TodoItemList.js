import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="하이"/>
                <TodoItem text="반가워"/>
                <TodoItem text="잘해보자"/>
            </div>
        );
    }
}

export default TodoItemList;