import React from 'react'
import { Todobutton } from './Client'

export const TodoItem = ({ title, description, id, completed }) => {
  return (
    <div className='todo' style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div>
        
        <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>{title}</h4>
        <p style={{ fontSize: '14px', color: '#888' }}>{description}</p>
        <div>
          <Todobutton id={id} completed={completed} />
        </div>
      </div>
    </div>

  )
}


