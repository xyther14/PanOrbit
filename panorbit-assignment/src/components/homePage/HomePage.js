import React from 'react'
import './HomePage.css'
import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import Header from '../../header/Header';
import { useAPI } from '../../context/UserContext';
const HomePage = (props) => {
  const { authUser } = useAPI()
  // let location = useLocation();
  // const user = location.state;
  return (
    <div className='home-page'>
      <Header props={authUser}/>
      <SideBar/>
      <Outlet />
    </div>
  )
}


export default HomePage