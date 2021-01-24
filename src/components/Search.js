import { useState } from 'react';
import axios from 'axios';

const Search = () => {
    let query = ""
    const [querySuggestions, updateQuerySuggestions] = useState([])

    const searchSuggestions = async (event) => {
        query = (event.target.value)
        console.log(query)
        const result = await axios.get('/api/v1/counter',{}, { headers: {"Content-type": "application/json"}});
        const counters = result.data
        const suggestions = counters.filter(counter => counter.title.includes(query));
        updateQuerySuggestions(suggestions)    
    }

    const listSuggestions = querySuggestions.map((suggestion) =>
<p key={suggestion.id}>{suggestion.title}</p>
);

    return (
    <>
    <input type="text" onChange={searchSuggestions}  />
      <div>{listSuggestions}</div>
    </>
    );
  };
  
  export default Search;