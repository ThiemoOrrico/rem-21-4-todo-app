import './App.css';
import TodoList from "./components/TodoList";

import React, {useState, useEffect} from 'react';


function App() {

    const urlEndpoint = "/api/todo";

    const [todoStatus, setTodoStatus] = useState([]);
    const [inProgressStatus, setInProgressStatus] = useState([]);
    const [doneStatus, setDoneStatus] = useState([]);


    const getTodoListElemtents = (jsonUrl) => {
        fetch(jsonUrl)
            .then(response => response.json())
            .then ( responseJson => setTodoStatus(responseJson
                    .filter(todoStatus => todoStatus.status.includes("todo"))
                    ))
            .then(data => console.log("hier die ausgabe von use Effect: " + data))
            .catch(error => console.log(error + "hier ist immernoch ein Fehler drin!!!!"))
    }

    const getInProgressListElemtents = (jsonUrl) => {
        fetch(jsonUrl)
            .then(response => response.json())
            .then ( responseJson => setInProgressStatus(responseJson
                .filter(inProgressStatus => inProgressStatus.status.includes("inProgress"))
            ))
            .then(data => console.log("hier die ausgabe von use Effect: " + data))
            .catch(error => console.log(error + "hier ist immernoch ein Fehler drin!!!!"))
    }

    const getDoneListElemtents = (jsonUrl) => {
        fetch(jsonUrl)
            .then(response => response.json())
            .then ( responseJson => setDoneStatus(responseJson
                .filter(doneStatus => doneStatus.status.includes("done"))
            ))
            .then(data => console.log("hier die ausgabe von use Effect: " + data))
            .catch(error => console.log(error + "hier ist immernoch ein Fehler drin!!!!"))
    }

        useEffect(() => {
            getTodoListElemtents(urlEndpoint)
        }, []) //wann soll ausgeführt werden: ller -> anfang oder immer wenn:  ???

        useEffect(() => {
            getInProgressListElemtents(urlEndpoint)
        }, []) //wann soll ausgeführt werden: ller -> anfang oder immer wenn:  ???

         useEffect(() => {
            getDoneListElemtents(urlEndpoint)
        }, []) //wann soll ausgeführt werden: ller -> anfang oder immer wenn:  ???




    return (
        <div>

            <TodoList todos={todoStatus}/>
            <TodoList todos={inProgressStatus}/>
            <TodoList todos={doneStatus}/>

            <div className="control-elements">
                <button>todo erstellen</button>
                <input value="String" />
            </div>
        </div>
    );
}

export default App;
