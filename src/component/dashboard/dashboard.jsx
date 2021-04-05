import React from 'react'
import Addtask from '../task/addtask'
import Tasks from '../task/tasks' 
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        const {uid}=this.props
        if (!uid){
            return(
                <Redirect to="/signin" />
            )
        }
        return(
            <>
            <div className='container' style={{marginBottom:'5%',marginTop:'5%'}} >
                <Addtask />
            </div>
            <div className='container'> 
                <Tasks />
            </div>  
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }

}

export default connect(mapStateToProps)(Dashboard)