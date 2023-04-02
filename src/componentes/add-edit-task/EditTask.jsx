import React, { useEffect, useState } from 'react'
import './add-edit-Task.css';
const EditTask = ({setDisplayEdit,idEdit,tasksList,setTasksList}) => {
    
    const [index , setIndex] = useState(0);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


    const removeForm = () => {
		setDisplayEdit(false);
	}

    useEffect(() => {
        tasksList.map(task => {
            if (task.id == idEdit){
                setTitle(task.title);
                setDescription(task.description);
            }
        });
        setIndex(tasksList.findIndex(task => task.id === idEdit))
    }, []);
    
    const getData = (e) => {
		e.preventDefault();
		let editedTask = {
			id: new Date().getTime(),
			title: e.target.taskTitle.value,
			description: e.target.taskDescription.value
		};

        let newTaskList = tasksList;
        newTaskList.splice(index,1,editedTask);
        setTasksList(newTaskList);
        
        let storage = JSON.parse(localStorage.getItem('task'));
        storage.splice(index,1,editedTask);
        localStorage.setItem('task',JSON.stringify(storage));

        setDisplayEdit(false);
	}

    return (
    <div className="opacity-form">
        <form className='form-task' onSubmit={getData}>
            <h2>Edit Task</h2>
            <input 	type="text"
                    id='taskTitle'
                    name='taskTitle' 
                    placeholder='Title'
                    autoComplete='off'
                    defaultValue={title}/>
            <textarea 	id='taskDescription'
                        name='taskDescription'
                        placeholder='Description...'
                        autoComplete='off'
                        defaultValue={description}>
            </textarea>
            <div className="buttons-task">
                <input type="submit" id='addTask' value='Confirm' />
                <button id='cancelAdded' onClick={removeForm}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default EditTask;