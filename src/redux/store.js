import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Rootreducer from './root-reducer'
import {getFirebase} from 'react-redux-firebase'
import firebase from '../firebase/config'
import {createFirestoreInstance} from 'redux-firestore'

const middleware=[thunk.withExtraArgument({getFirebase})]
const store=createStore(Rootreducer,applyMiddleware(...middleware))

const rrfProps={
    firebase,
    config:{},
    dispatch:store.dispatch,
    createFirestoreInstance

}

export {store,rrfProps}

