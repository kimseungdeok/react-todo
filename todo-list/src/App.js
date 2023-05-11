import "./App.css";
import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";

function App() {
    return (
        <div className="App">
            <TodoListTemplate form={<div>폼</div>}>
                TodoListTemplate
            </TodoListTemplate>
        </div>
    );
}

export default App;
