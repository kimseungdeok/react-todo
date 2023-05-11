import "./App.css";
import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <TodoListTemplate form={<Form />}>
                TodoListTemplate
            </TodoListTemplate>
        </div>
    );
}

export default App;
