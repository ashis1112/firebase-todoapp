import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'

import {Removetask} from '../../redux/addtask/addtaskactions'

const Task=({task,removetask,uid})=>{
  let datas=[]
  task.filter(data=>data.authorid === uid ? datas.push(data):null)
  return(
    <>
    {datas.map((data)=>(
        <>
        <tr>
          <th scope="row">{data.task}</th>
          <td>{moment(data.date.toDate()).calendar()}</td>
          <td>
          <span class="material-icons" style={{cursor:'pointer'}}>check_circle</span>
          </td>
          <td>
          <span class="material-icons text-danger" style={{cursor:'pointer'}} onClick={()=>removetask(data.id)}>delete</span>
          </td>
        </tr>
        </>
      )
    )}
    </>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return{
      removetask:(id)=>dispatch(Removetask(id))
  }
}

const mapStateToProps=(state)=>{
  return{
    uid:state.firebase.auth.uid
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Task)