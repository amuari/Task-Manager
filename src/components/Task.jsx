import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ id, todo, date, handleDelete }) => {
  return (
    <div
      className='flex justify-between w-1/2 bg-gray-200 text-left rounded-xl p-2  mt-6'
      key={id}
    >
      <div className='p-2 '>
        <p>Task:{todo}</p>
        <p>Date:{date}</p>
      </div>
      <span>
        <button onClick={() => handleDelete(id)}>
          <FaTrashAlt color='red' className='hover:animate-bounce' />
        </button>
      </span>
    </div>
  )
}

export default Task
