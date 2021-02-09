import React from 'react'
import AddIcon from 'material-ui/icons/Add';

function newFile() {
  return (
    <div className='newFile'>
      <div className="newFle__container">
        <AddIcon />
        <p>New</p>
      </div>
    </div>
  )
}

export default newFile
