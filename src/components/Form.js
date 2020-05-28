import React from 'react'
import useInput from '../hooks/useInput'

const Form = ()=>{
    const [{food,color},{setInput}] = useInput({food:'',color:''})
    return(
        <div>
            <input name='food' value={food} onChange={setInput} />
            <input name='color' value={color} onChange={setInput} />
            <button onClick={()=>{console.log({food,color})}}>SHOW</button>
        </div>
    )
}

export default Form