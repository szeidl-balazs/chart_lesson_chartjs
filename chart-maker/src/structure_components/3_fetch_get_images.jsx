import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const FetchImages = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setData(json))
        .then(err => console.log(err))

    }, [])

    return (

        <div className="fetch-images-wrapper">
            
            {data.map((item, index) => (

                <div key={index} className="image-item">
                    <h3 >{item.title}</h3>
                    <a target="_blank" rel="noreferrer" href={item.url}>
                        <img src={item.thumbnailUrl} alt={item.id} className="image"/>
                    </a>
                </div>
               
            ))}
            
        </div>
    )

}

export default FetchImages;