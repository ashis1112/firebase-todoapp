export const addTask=task=>{
    return (dispatch,getState,{getFirebase})=>{
        const firestore=getFirebase().firestore()
        const authorid=getState().firebase.auth.uid
        
        firestore.collection("tasks")
        .add({
            task,
            authorid:authorid,
            date:new Date()
        })
        .then(()=>{
            dispatch({ 
                type:"ADD_TASK",
                payload:task
            })
        })
        .catch(err=>{
            dispatch({
                type:"ADD_TASK_ERR",
                payload:err
            })
        })
    }
}
export const Removetask=(id)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore=getFirebase().firestore()
        firestore
        .collection('tasks')
        .doc(id)
        .delete()
        .then(()=>{
            dispatch({
                type:"REMOVE_TASK"
            })
        })
        .catch(err=>{
            dispatch({
                type:"REMOVE_TASK_ERR",
                payload:err
            })
        })

    }
}