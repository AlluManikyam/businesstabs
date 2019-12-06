import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import BusinessCase from './components/businesscase/BusinessCase';


function App() {
  return (
<Router >
<Switch>
  <Route exact path='/' component={BusinessCase} />
</Switch>
</Router>
  );
}

export default App;
