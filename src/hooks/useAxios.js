import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url, initialData = []) => {
    const [axiosData, setAxiosData] = useState(initialData)

    useEffect(() => {
        axios.get('/api/info').then((res) => {
            setAxiosData(res.data)
        })
    }, [url])
    return [axiosData, setAxiosData]
}

export default useAxios