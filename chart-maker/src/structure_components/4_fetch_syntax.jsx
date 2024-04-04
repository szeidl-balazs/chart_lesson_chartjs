import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const FetchSyntax = () => {

    const [data, setData] = useState ([]);

    useEffect(() => {

        fetch('url')
        .then(response => response.json())
        .then(jsondata => setData(jsondata))
        .then(error => console.log(error))
    },[])

    return(
        <div>
            {data.map((item, index) =>
            <ul key={index}>
                <li>{item.id}</li>
                <li>{item.title}</li>
            </ul>
            )}
        </div>
    )
}

export default FetchSyntax;

