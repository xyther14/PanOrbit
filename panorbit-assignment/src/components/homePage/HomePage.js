import React from 'react'
import './HomePage.css'
import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import Header from '../../header/Header';
import { useAPI } from '../../context/UserContext';
import ChatBox from '../chatbox/ChatBox';
const HomePage = (props) => {
  const { users, authUser } = useAPI()
  // let location = useLocation();
  // const user = location.state;
  return (
    <div className='home-page'>
      <Header props={authUser}/>
      <SideBar/>
      <Outlet />
      <ChatBox props={[users, authUser]}/>
    </div>
  )
}


export default HomePage