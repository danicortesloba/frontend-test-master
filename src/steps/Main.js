import { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [counters, updateCounters] = useState([]);
  
  useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('/api/v1/counter',{}, { headers: {"Content-type": "application/json"}});
          updateCounters(result.data)
        }
        fetchData();
        
      }, []);

const listCounters = counters.map((counter) =>
<li>{counter.title}</li>
);

    return (
    <ul>{listCounters}</ul>  
    );
  };
  
  export default Main;

 
  