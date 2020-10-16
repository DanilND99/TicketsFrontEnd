import React from 'react';
import Board from '../components/Board'
import Details from './Details'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route path='/' component={Board} exact/>
      <Route path='/details' component={Details} />
    </Switch>

  );
}

export default App;
