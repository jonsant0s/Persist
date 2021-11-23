import React from 'react';

// We use Route in order to define the different routes of our application
//import { Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import SideBar from "./components/sidebar";

const App = () => {
  return (
    <div>
      <Router>
        <SideBar/>
      </Router>
      
      
    </div>
  );
};

export default App;
