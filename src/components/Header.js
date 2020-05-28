import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () =>{
    const {push} = useHistory()
    return <header>
        <button onClick={()=>{push('/')}}>Home</button>
        <button onClick={()=>{push('/info')}}>Info</button>
        <button onClick={()=>{push('/addUser')}}>Add User</button>
        <button onClick={()=>{push('/altInfo')}}>Alt Info</button>
        <button onClick={()=>{push('/form')}}>Form</button>
    </header>
}

export default Header