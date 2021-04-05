import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTask} from '../../redux/addtask/addtaskactions'

class Addtask extends Component{

    constructor(){
        super()
        this.state={
            task:'',
            isEmpty:false
        }
    }
    submit=(e)=>{
        e.preventDefault()
        document.getElementById('addtaskform').reset()
        if(this.state.task){
        this.props.addtask(this.state.task)
        this.setState({isEmpty:false})
        this.setState({task:''})
        }else{
            this.setState({isEmpty: true})
        }

    }
    change=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        return(
            <div className='container'>
                <form id='addtaskform' onSubmit={this.submit} className="white">
                    <div className='mb-3'>
                        <label className='form-label text-primary '>Add Task </label>
                        <input type='text' id='task' className='form-control' onChange={this.change}/>
                    </div>
                    <button className='btn btn-primary'>Add-Task</button>
                </form>
                <p>{this.state.isEmpty?<span>This field is empty</span>:''}</p>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addtask:(data)=>dispatch(addTask(data))
    }
}

export default connect(null,mapDispatchToProps)(Addtask)
