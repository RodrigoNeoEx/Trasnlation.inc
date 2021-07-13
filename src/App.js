import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Singles from './pages/Singles/Singles';
import Single from './pages/Single/Single';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/singles" component={ Singles } />
      <Route path="/single/:id" component={ Single } />
    </Switch>
  );
}

export default App;
