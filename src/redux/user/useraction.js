export const signin=creds=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        
        firebase
        .auth()
        .signInWithEmailAndPassword(creds.email,creds.password)
        .then(()=>{
            dispatch({type:"SIGN_IN"})
        })
        .catch(err=>{
            dispatch({type:"SIGN_IN_ERR"},err)
        })
    }
}

export const signup=creds=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(creds.email,creds.password)
        .then(()=>{
            dispatch({type:"SIGN_UP"})
        })
        .catch(err=>{
            dispatch({type:"SIGN_UP_ERR"},err)
        })
    }
}


export const signout=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()

        firebase
        .auth()
        .signOut()
        .then(()=>{
            dispatch({type:"SIGN_OUT"})
        })
    }
}

export const resetpasswordemail=(email)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()

        firebase
        .resetPassword(email)
        .then(()=>{
            dispatch({type:"RESET_PASSWORD_EMAIL_SUCCESS"})
        })
        .catch(()=>{
            dispatch({type:"RESET_PASSWORD_EMAIL_FAILED"})
        })
    }
}