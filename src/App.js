import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
      <div>
        <Switch>
        <Route exact path = "/" component = {Homepage}/>
        {/*<Route  path = "/hats" component = {HatsPage}/>*/}
        </Switch>
      </div>
  );
}

export default App;
