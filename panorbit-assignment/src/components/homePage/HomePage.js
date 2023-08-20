import React from 'react'
import './HomePage.css'
import { useLocation, Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
const HomePage = (props) => {
  // let location = useLocation();
  // const user = location.state;
  return (
    <div className='home-page'>
      <SideBar/>
      <Outlet />
    </div>
  )
}


export default HomePage