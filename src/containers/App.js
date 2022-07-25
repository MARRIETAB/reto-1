import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {GlobalStyles} from '../styles/GlobalStyles';
import StateBar from '../components/StateBar';
import NavLine from '../components/NavLine';
import Vista1 from '../components/Vista1';
import Vista2 from '../components/Vista2';
import Vista3 from '../components/Vista3';
import Vista4 from '../components/Vista4';
import Register from '../components/Register';
import Login from '../components/Login';
import Home from '../components/Home';


const App = () => {
    return (
      <BrowserRouter>
      <GlobalStyles/>
      <StateBar/>
      <NavLine/>
        <Routes>
            <Route path="/" element={<Vista1/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Vista2" element={<Vista2/>}/>
            <Route path="/Vista3" element={<Vista3/>}/>
            <Route path="/Vista4" element={<Vista4/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="*" element={<Navigate replace to="/Home" />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;



