import {toast} from 'react-toastify'

const INITIAL_STATE={}

const Userreducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome Back...")
            return state
        case "SIGN_IN_ERR":
            toast.error("Signin error")
            return state
        case "SIGN_OUT":
            toast("You Signout ...")
            return state    
        case "SIGN_UP":
            toast("Signup completed")
            return state
        case "SIGN_UP_ERR":
            toast.error("Signup Error")
            return state
        case "RESET_PASSWORD_EMAIL_SUCCESS":
            toast("Password Reset Email Send")
            return state
        case "RESET_PASSWORD_EMAIL_FAILED":
            toast.error("Password Reset Email Not Send")
            return state
        default:
            return state
    }
    
}

export default Userreducer