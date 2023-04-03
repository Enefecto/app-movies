import React, { useEffect } from 'react'
import './tasks.css';
const Movies = ({tasksList, setTasksList,setDisplayEdit,setIdEdit}) => {


    useEffect(() => {
        getTasks();
    }, [])

    const displayForm = (id) => {
        setIdEdit(id);
        setDisplayEdit(true);
    }

    const getTasks = () => {
        let tasks = JSON.parse(localStorage.getItem('task'));
        setTasksList(tasks);
    }

    const deleteTask = (id) => {
        let tasks = JSON.parse(localStorage.getItem('task'));
        let newTasks = tasks.filter(task => task.id !== id);
        setTasksList(newTasks);
        localStorage.setItem('task',JSON.stringify(newTasks));
    }

    return (
    <ul className="tasks">
        {
        tasksList.length != 0 ? tasksList.map(task => {
            return (
                <li key={task.id} className="card">
                    <h3 className="card-tittle">{task.title}</h3>
                    <p className="card-description">{task.description}</p>
                    <div className="card-options">
                        <button className="card-button b-edit" onClick={() => displayForm(task.id)}>Edit</button>
                        <button className="card-button b-delete" onClick={ () => deleteTask(task.id)}>Delete</button>
                    </div>
                </li>
            );
            })
        : <h2 id='no-tasks'>There are no tasks, ¡¡ADD ONE!!</h2>
        }
    </ul>
    )
}

export default Movies;