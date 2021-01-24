import { useEffect, useState } from 'react';
import axios from 'axios';

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
       {isLoading
      ? <p key="loading"> Loading </p>
      : counters.length > 0 ? <ul key="listcounters">{listCounters}</ul> : <p key="nocounters">No counters yet!</p>
      }
      </div>
    );
  };
  
  export default Main;

 
  