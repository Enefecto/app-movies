import React, { useEffect, useState } from 'react'
import './tasks.css';
const Movies = ({tasksList, tasksListSet}) => {


    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        let tasks = JSON.parse(localStorage.getItem('task'));
        tasksListSet(tasks);
    }

    return (
    <ul className="tasks">
        {
        tasksList ? tasksList.map(task => {
            return (
                <li key={task.id} className="card">
                    <h3 className="card-tittle">{task.title}</h3>
                    <p className="card-description">{task.description}</p>
                    <div className="card-options">
                        <button className="card-button b-edit">Edit</button>
                        <button className="card-button b-delete">Delete</button>
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