import React from 'react'
import {Link} from 'react-router-dom'
import Navitem from './navbaritem'

const Navbar=()=>{
    return(
        <>
            <nav className='navbar navbar-light bg-light d-flex justify-content-center'>
                <Link to='/' className='navbar-brand' >
                    <h3>Todo App</h3>
                </Link> 
                <Navitem />
            </nav>
        </>
    )
}

export default Navbar