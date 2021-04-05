import React,{Component} from 'react'
import {signin} from '../../redux/user/useraction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Signin extends Component{

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        this.props.getsignin(this.state)
        document.getElementsByTagName('form')[0].reset()
    }
    change=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        const {uid}=this.props
        if (uid) return <Redirect to='/' />
        return(
            <div className='container'>
                <form onSubmit={this.submit} className="white">
                    <h3 className='text-primary '>Signin</h3>

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

const mapStateToProps=(state)=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }

}

const mapDispatchTOProps=(dispatch)=>({
    getsignin:(creds)=>dispatch(signin(creds))
})

export default connect(mapStateToProps,mapDispatchTOProps)(Signin)
