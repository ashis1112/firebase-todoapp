import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'
 
export function Authisloaded({children}){
    const auth=useSelector(state=>state.firebase.auth)

    if (!isLoaded(auth)){
        return(
            <div className="text-center">
                <div className="spinner-grow text-primary" 
                style={{width:"7rem",height:"7rem"}} role="status">
                    
                <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return children
}