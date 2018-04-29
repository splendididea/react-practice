import React, { Component } from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, palette}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
            오늘 할일
            </div>
            <section className="form-wrapper">
            {form}
            </section>
            <section className="todos-wrapper">
            {children}
            </section>
            <section>
            {palette}    
            </section>
        </main>
    );
}
export default TodoListTemplate;