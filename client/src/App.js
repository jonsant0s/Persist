import React, { useState } from 'react';

// We use Route in order to define the different routes of our application
//import { Route } from "react-router-dom";
import { Navigate, Routes, Route } from 'react-router-dom';
// We import all the components we need in our app
import { Navbar } from "./components/navigation/NavBar";
import AuthRequired from "./services/AuthRequired";
import AuthHelpers from "./services/AuthHelpers";
import CustomAlert from "./components/alert/CustomAlert";

import HomeScreen from "./components/home/HomeScreen";
import Edit from "./components/edit";
import CreateRecord from "./components/record/CreateRecord";
import RecordsList from "./components/record/RecordsList";
import SideBar from "./components/sidebar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



const App = () => {
  const user = AuthHelpers.getCurrentUser();
  const [show, setShow] = useState(false);


  return (
    <div className="App">
      <Navbar/>
      {show && <CustomAlert setShow={setShow}/>}
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={
          <AuthRequired setShow={setShow}>
            <HomeScreen/>
          </AuthRequired>
        }/>
          <Route path='/records' element={<RecordsList/>}/>
          <Route path='/create' element={<CreateRecord/>}/>
        
        

      </Routes>
      
      
    </div>
  );
};

export default App;
