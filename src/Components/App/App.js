import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Main from '../Main/Main';
import history from '../../Context/history';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
