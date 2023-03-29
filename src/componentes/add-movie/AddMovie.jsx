import React from 'react'
import './addMovie.css';
const AddMovie = () => {
  return (
    <div className="cont-add">
        <button id="add">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="3.6rem" height="3.6rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add Movie</span>
        </button>
    </div>
  )
}

export default AddMovie;