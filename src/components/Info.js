import React from 'react'
import {useSelector} from 'react-redux'
import User from '../components/User'

const Info = ()=>{
    const info = useSelector(({info})=>info)
    console.log(info)
    return (
        <div>
            {info.map((e)=>{
                return<div>
                        <User info={e} />
                    </div>
            })}
        </div>
    )
}

export default Info