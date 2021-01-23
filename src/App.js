import { useEffect } from 'react';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Create from './steps/Create'
import Examples from './steps/Examples'
import Main from './steps/Main'
import Welcome from './steps/Welcome'

const getCounters = () => 
  fetch('/api/v1/counter', { method: 'get' })
    .then(res => res.json());

const App = () => {
  useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
      <HashRouter>
        <h1>Hello, Cornershop!</h1>
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/create">Create</Link>
        <Link to="/examples">Examples</Link>
        <div>
            <Switch>
                <Route exact path="/" component={Welcome}></Route>
                <Route exact path="/main" component={Main}></Route>
                <Route exact path="/create" component={Create}></Route>
                <Route exact path="/examples" component={Examples}></Route>
            </Switch>  
        </div>
      </HashRouter>    
  );
};

export default App;


