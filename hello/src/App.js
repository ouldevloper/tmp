
import React from 'react';
import 'antd/dist/antd.min.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import _404 from './compenents/404';
import AdminHome from './pages/adminhome';
import Detail from './pages/admindetails';
import UserHome from './pages/userhome';


//const ID_USER = document.window.ID_USER;
const  user_id = 30845;
const URL  = "https://crm.lichishop.com/rest/1/pe1ys43oe0mxs5s0/user.get?ID=";
const fetchUser = ()=>{
    
    // /axios.post("http://127.0.0.1/api/task/all").then((response)=>{
    // /  console.log(response.data);
    // /});
}
const HandelUser = (role) => {
  if (role==0){
    return <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AdminHome />}/>
        <Route path="/details" exact  element={<Detail />} />
        <Route element={_404} />

      </Routes>
    </BrowserRouter>;
  }else{
    return <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserHome/>}/>
        <Route element={_404} />

      </Routes>
    </BrowserRouter>;
  }
}

function App() {
  fetchUser();
  return (
    HandelUser(1)
  );
}
export default App;
