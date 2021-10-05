import './App.css';
//import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

import React, {useState, useEffect} from 'react';


function App() {

    const urlEndpoint = "localhost:8080/api/todo";




    //const [state, setState] = useState(initialState);
    //setState(newState);

    const [schnitzel, setSchnitzel] = useState([
        {
            "id": "2fbffb09-005d-4165-895c-77fe7f15d924",
            "description": "Aufgabe1",
            "status": "todo"
        },
        {
            "id": "4cdc5ec0-21b8-4f2f-9ea9-78b7831f4f1c",
            "description": "Aufgabe2",
            "status": "inProgress"
        },
        {
            "id": "ad6bfe7e-c5aa-4354-992a-bf5059172ee9",
            "description": "Aufgabe3",
            "status": "todo"
        }


    ]);

    // use effect:

    /*
    const getTodoListElemtents = (urlEndpoint) => {
        fetch(urlEndpoint)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        getTodoListElemtents(urlEndpoint)
    }, []) //wann soll ausgeführt werden: ller -> anfang oder immer wenn:  ???

*/


    return (
        <div>

                <TodoList todos={schnitzel}/>


            <div className="control-elements">
                <button>trigger GET all</button>
                <button>BUTTON</button>
                <input value="String" />
            </div>
        </div>
    );
}

export default App;
