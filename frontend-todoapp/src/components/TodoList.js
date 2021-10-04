import TodoItem from "./TodoItem";
//import styled from "styled-components";
import "./TodoList.css"


export default function TodoList() {
    return (

            <ul class="todo-list">


                <TodoItem />
                <TodoItem />
                <TodoItem />



            </ul>

    )
}

/*
const TodoListContent = styled.ul`
    border: 1px solid;
    border-radius: 2px;
`*/