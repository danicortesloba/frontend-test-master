import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';

let isLoading = true;

const Main = () => {
  const [counters, updateCounters] = useState([]);
 
  
  useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('/api/v1/counter',{}, { headers: {"Content-type": "application/json"}});
          updateCounters(result.data)
        }
        fetchData();
        isLoading = false;
        
      }, []);

const listCounters = counters.map((counter) =>
<li key={counter.id}>{counter.title}</li>
);

    return (
       <div>
        <Search />
       {isLoading
      ? <p> Loading </p>
      : counters.length > 0 ? <ul>{listCounters}</ul> : <p>No counters yet!</p>
      }
      </div>
    );
  };
  
  export default Main;

 
  