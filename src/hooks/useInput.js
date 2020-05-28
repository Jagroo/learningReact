import React, { useState } from 'react'

const useInput = (initialState) => {
    const [values, setValues] = useState(initialState)
    return [
        values,
        {
            setInput: (event) => {
                setValues(
                    { ...values, [event.target.name]: event.target.value })
            },
            resetInputs:()=>{setValues(initialState)}
        }
    ]
}

export default useInput