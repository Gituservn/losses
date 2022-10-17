import React, {useEffect, useState} from 'react';
import axios from "axios";

function UseFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setloading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(()=>{
            setloading(false)
        });
    },[url]);

    return {data,loading,error}
}

export default UseFetch;