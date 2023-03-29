import React, { useState } from 'react'
import './addTask.css';
const Addtask = () => {

	const [formActive, formActiveSet] = useState(false);

	const displayForm = () => {
		formActiveSet(true);
	}
	const removeForm = () => {
		formActiveSet(false);
	}

	const getData = (e) => {
		e.preventDefault();
		const target = e.target;
		let title = target.taskTitle.value;
		let description = target.taskDescription.value;

		
	}

	if (!formActive){
		return (
			<div className="cont-add">
				<button id="add" onClick={displayForm}>
					<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="3.6rem" height="3.6rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
					<span>Add Task</span>
				</button>
			</div>
		)
	} else {
		return (
			<div className="opacity-form">
				<form className='form-task' onSubmit={getData}>
					<input 	type="text"
							id='taskTitle'
							name='taskTitle' 
							placeholder='Title'/>
					<textarea 	id='taskDescription'
								name='taskDescription'
								placeholder='Description...'>
					</textarea>
					<div className="buttons-task">
						<input type="submit" id='addTask' value='Confirm' />
						<button id='cancelAdded' onClick={removeForm}>Cancel</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Addtask;