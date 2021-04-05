import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import Addtaskreducer from './addtask/addtaskreducer'
import Userreducer from './user/userreducer'

const Rootreducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    addtask:Addtaskreducer,
    user:Userreducer
})

export default Rootreducer