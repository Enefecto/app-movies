import React from 'react'
import './tasks.css';
const Movies = () => {
  return (
    <ul className="tasks">
        <li className="card">
            <h3 className="card-tittle">El Gato Con Botas</h3>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias ab numquam tempora aliquam, at fugiat sequi magnam architecto perferendis harum? Autem similique corporis ipsa ipsum, enim porro velit sapiente.</p>
            <div className="card-options">
                <button className="card-button b-edit">Edit</button>
                <button className="card-button b-delete">Delete</button>
            </div>
        </li>
    </ul>
  )
}

export default Movies;