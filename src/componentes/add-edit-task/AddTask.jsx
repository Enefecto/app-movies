import { SaveStorage } from '../helper/SaveStorage';
import React from 'react'
import './add-edit-Task.css';

const AddTask = ({setDisplayAdd,setTasksList}) => {

    const removeForm = () => {
		setDisplayAdd(false);
	}

    const getData = (e) => {
		e.preventDefault();
		let tempTask = {
			id: new Date().getTime(),
			title: e.target.taskTitle.value,
			description: e.target.taskDescription.value
		};

		// Save in localStorage
		SaveStorage('task',tempTask);

		setTasksList(tasks => {
			if (tasks){
				return [tempTask, ...tasks]
			} else {
				return [tempTask];
			}
		});

		setDisplayAdd(false);
	}

    return (
    <div className="opacity-form" onSubmit={getData}>
        <form className='form-task'>
            <input 	type="text"
                    id='taskTitle'
                    name='taskTitle' 
                    placeholder='Title'
                    autoComplete='off'/>
            <textarea 	id='taskDescription'
                        name='taskDescription'
                        placeholder='Description...'
                        autoComplete='off'>
            </textarea>
            <div className="buttons-task">
                <input type="submit" id='addTask' value='Confirm' />
                <button id='cancelAdded' onClick={removeForm}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
export default AddTask;