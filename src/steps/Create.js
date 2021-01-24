

const data = {title: "hello2"}

const createCounters = () => 
fetch('/api/v1/counter', { method: 'post',  body: JSON.stringify(data),
headers: {"Content-type": "application/json; charset=UTF-8"}})    
  .then(res => res.json())

const Create = () => {
    return (
        <button onClick={createCounters}>Create counter</button>
    );
  };
  
  export default Create;