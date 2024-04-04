import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FetchGet = () => {

   
    const [records, setRecords] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(err => console.log(err))

    }, []);

    return (
        <div className="fetchget-wrap">
            <ul className="unordered-list-wrap">
                {records.map((list, index)=>(
                    <li  className="list-wrap" key={index}>{list.id} | {list.title}</li>
                ))}
            </ul>
        </div>
    )
    

}

export default FetchGet;