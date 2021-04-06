import React,{Component} from 'react'
import {resetpasswordemail} from '../../redux/user/useraction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Passreset extends Component{

    constructor(){
        super()
        this.state={
            email:'',
        }
    }
    submit=(e)=>{
        e.preventDefault()
        this.props.resetpasswordemail(this.state.email)
        document.getElementsByTagName('form')[0].reset()
        console.log(e)
        if(e.type === "submit"){
            return <Redirect to="/" />
        }
    }
    change=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.submit} className="white">
                    <h3 className='text-primary '>Reset Email</h3>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <div id="emailHelp" className="form-text">Email To Send Password Reset Link</div>
                        <input type='email' id='email' className='form-control' onChange={this.change}/>
                    </div>
                    <button className='btn btn-primary'>ResetEmail</button>
                </form>
            </div>
        )
    }
}

const mapDispatchTOProps=(dispatch)=>({
    resetpasswordemail:(creds)=>dispatch(resetpasswordemail(creds))
})

export default connect(null,mapDispatchTOProps)(Passreset)
