import TodoItem from "./TodoItem";
import styled from "styled-components";
import "./TodoList.css"


export default function TodoList({todos}) {

    console.log(todos);

    return (

            <List className="todo-list">

                {
                todos.map( todo => <TodoItem key={todo.id} todoItem={todo}/>)
                }
            </List>

    )
}


const List = styled.ul`
    border: 1px solid;
    border-radius: 5px;
    background: yellowgreen;
`