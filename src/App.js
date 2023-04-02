import './App.css';
import Search from './componentes/search/Search';
import ButtonAddTask from './componentes/add-edit-task/ButtonAddTask';
import Tasks from './componentes/tasks/Tasks.jsx';
import DisplayComponents from './componentes/displayComponents/DisplayComponents';
import { useState } from 'react';

function App() {

    const [tasksList, setTasksList] = useState([]);
    const [displayAdd, setDisplayAdd] = useState(false);
    const [displayEdit, setDisplayEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(0);


    return (
    <div className="conteiner">
        <header className="header">
                <div className="play">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 4v16l13 -8z" />
                    </svg>
                </div>
                <h1 id="title">Tasks Time</h1>
        </header>
        <div className="separator"></div>
        <main className="main">
            <section className="cont-up">
                <Search 
                    tasksList={tasksList}
                    setTasksList={setTasksList}/>
                <ButtonAddTask 
                    setDisplayAdd={setDisplayAdd}
                />
            </section>
            <section className="cont-tasks">
                <Tasks
                    tasksList={tasksList}
                    setTasksList={setTasksList}
                    setDisplayEdit={setDisplayEdit}
                    setIdEdit={setIdEdit}
                />
            </section>
        </main>
        <DisplayComponents
            displayEdit={displayEdit}
            setDisplayEdit={setDisplayEdit}
            displayAdd={displayAdd}
            setDisplayAdd={setDisplayAdd}
            tasksList={tasksList}
            setTasksList={setTasksList}
            idEdit={idEdit}
        />
        <footer className="footer"></footer>
    </div>
  );
}

export default App;