import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Create from './steps/Create'
import Examples from './steps/Examples'
import Main from './steps/Main'
import Welcome from './steps/Welcome'

const App = () => {
return (
      <HashRouter>
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


