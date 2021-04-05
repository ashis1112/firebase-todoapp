import React from 'react'
import Task from './task'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const Tasks=({tasks})=>{
  
  return(
<table class="table table-dark">
  <thead>
    <tr className='text-info' style={{alignItems:'center'}}>
      <th scope="col">Tasks</th>
      <th scope="col">Added On</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {tasks && <Task  task={tasks}/>} 
  </tbody>
</table>
)
}
const mapStateToProps=(state)=>{
  const tasks=state.firestore.ordered.tasks
  return{
    tasks:tasks
  }
}

export default compose(
  firestoreConnect((ownprops)=>[{
    collection:'tasks',
  }]),
  connect(mapStateToProps)

  )(Tasks)
