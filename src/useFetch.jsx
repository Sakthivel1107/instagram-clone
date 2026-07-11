import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [err,setErr] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(value => value.json())
        .then(data => setData(data))
        .catch(err => setErr(err))
    },[]);
    return [data,err];
}

export default useFetch 