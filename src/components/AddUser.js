import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {setInfo} from '../redux/reducer'

const AddUser = ({info,setInfo})=>{
    useEffect(()=>{
        axios.get('api/info').then((res) =>{
            setInfo(res.data)
        })
    })
    const [info_name, setName] = useState('')
    const [info_age, setAge] = useState(null)
    const [info_gender, setGender] = useState('')
    const {push} = useHistory()
    return(
        <div>

            {/* add name field*/}
            <h1>Name</h1>
            <input value={info_name} 
            onChange={(event) =>{
                setName(event.target.value)
            }}/>

            {/* add age field*/}
            <h1>Age</h1>
            <input value={info_age}
            onChange={(event) =>{
                setAge(event.target.value)
            }}/>

            {/* add gender field*/}
            <h1>Gender</h1>
            <input value={info_gender}
            onChange={(event)=>{
                setGender(event.target.value)
            }}/>

            {/* add Button */}
            <button onClick={(res)=>{
                axios.post('/api/info', {info_name,info_age,info_gender}).then((res)=>{
                    setInfo(res.data)
                    push('/info')
                })
            }}>ADD NEW USER</button>


        </div>
    )
}

const mapDispatchToProps = {setInfo}

export default connect(null,mapDispatchToProps)(AddUser)