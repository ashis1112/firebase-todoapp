import React,{Component} from 'react'
import {connect} from "react-redux"
import {signup} from '../../redux/user/useraction'
import {Redirect} from 'react-router-dom'

class Signup extends Component{

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        this.props.getsignup(this.state)
        document.getElementsByTagName("form")[0].reset()
    }
    change=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        const {uid}=this.props
        if(uid){
            return <Redirect to='/' />
        }
        return(
            <div className='container'>
                <form onSubmit={this.submit} className="white">
                    <h3 className='text-primary'>Signup</h3>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input type='email' id='email' className='form-control' onChange={this.change}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input type='password' id='password' className='form-control' onChange={this.change} />
                    </div>
                    
                    <button className='btn btn-primary'>Signin</button>

                </form>
            </div>
        )
    }
}

const mapDispatchTOProps=(dispatch)=>({
    getsignup:(creds)=>dispatch(signup(creds))
})

const mapStateToProps=(state)=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }

}

export default connect(mapStateToProps,mapDispatchTOProps)(Signup)