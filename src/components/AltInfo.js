import React from 'react'
import useAxios from '../hooks/useAxios'

const AltInfo = ()=>{
   const [info, setInfo] = useAxios('/api/info')
   return (<div>
       {JSON.stringify(info,null,2)}
    </div>)
}

export default AltInfo