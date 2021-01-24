import { useEffect } from 'react';

const data = {title: "hello"}

const createCounters = () => 
fetch('/api/v1/counter', { method: 'post',  body: JSON.stringify(data),
headers: {"Content-type": "application/json; charset=UTF-8"}})    
  .then(res => res.json())

const Create = () => {
  const counters =  useEffect(() => {
        createCounters().then(console.log, console.error);
      }, []);

    const listCounters = counters?.map((counter) =>
  <li>{counter}</li>
);
    
    return (
        <ul>{listCounters}</ul>
    );
  };
  
  export default Create;