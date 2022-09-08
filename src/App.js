
import React from 'react';
import 'antd/dist/antd.min.css';
import AdminHome from './compenents/admin/home/home';
import TaskDone from './compenents/user/donetask/home';
import UserHome from './compenents/user/home/home';
import DetailsBar from './compenents/admin/detail/tabbar';
import Detail from './compenents/admin/detail/detailsceen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import _404 from './compenents/404';

//const ID_USER = document.window.ID_USER;
const user_id = 30845;
const URL  = "https://crm.lichishop.com/rest/1/pe1ys43oe0mxs5s0/user.get?ID=";
const fetchUser = ()=>{
    fetch( URL+user_id)
    .then((res) => res.json())
    .then((json) => {
          console.log(json);
      });
}
const HandelUser = (role) => {
  if (role==0){
    return <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AdminHome />}/>
        <Route path="/details" exact  element={<Detail />} />
        <Route path='*' exact={true} component={_404} />

      </Routes>
    </BrowserRouter>;
  }else{
    return <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserHome />}/>
        <Route path='*' exact={true} component={_404} />

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
