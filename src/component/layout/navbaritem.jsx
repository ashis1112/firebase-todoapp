import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import {signout} from '../../redux/user/useraction'

const Navitems=({signout,uid})=>{
    if (uid){
        return(
            <Link to='/signin' className='nav-link' onClick={signout}>
            Logout
            </Link>
        )
    }
    return(
        <>
            <Link to='/signin' className="nav-link">
                Signin
            </Link>
            <Link to='/signup' className='nav-link'>
                Signup
            </Link>
           
        </>
    )
}

const mapDispatchTOProps=(dispatch)=>{
    return{
        signout:()=>dispatch(signout())
    }
}
const mapStateToProps=(state)=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }

}

export default connect(mapStateToProps,mapDispatchTOProps)(Navitems)