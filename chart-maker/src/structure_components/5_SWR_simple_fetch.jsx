import useSWR from 'swr';
import React from 'react';
//instalállni kell az SWR-t: npm i swr

const FetchWithSwr = () => {

  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/todos?_limit=5');
  
  if (error) return <h3>{error}</h3>

  return (
    <div>

      {data ? data.map((item, index) => (
        <ul key={index}>
          <li>{item.userId}</li>
          <li>{item.title}</li>
          <li>{item.completed.toString()}</li>
        </ul>
      )) : <h3>Loading...</h3>
      }

    </div>)

}

export default FetchWithSwr