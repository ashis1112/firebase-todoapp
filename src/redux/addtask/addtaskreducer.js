import { toast } from 'react-toastify';

const INITIAL_STATE={}

const Addtaskreducer=(state=INITIAL_STATE,action)=>{
    switch (action.payload) {
        case action.type === "ADD_TASK":
            toast.success('Task Added')
            return{
                ...state,
                task:action.payload
        
            }
        
        case 'ADD_TASK_ERR':
            toast.error('error')
            return {
                ...state,
                err:action.payload
            }
        
        case 'REMOVE_TASK':
            toast.error('Task Deleted')
            return state
        case 'REMOVE_TASK_ERR':
            toast.error('error')
            return{
                ...state,
                err:action.payload
            }

        default:
            return state
    }
}

export default Addtaskreducer