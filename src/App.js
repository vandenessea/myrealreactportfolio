import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Below we are imoporting our portfolio file from our componets folder
import Home from "./componets/Home";
import ContactInfo from "./componets/ContactInfo";

//import  from './componets/Card';
import "./App.css";
//import { Navbar } from 'react-bootstrap';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `portfolio` and rendering it in the return method.

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactInfo} />
      </Switch>
    </Router>
  );
}

export default App;
