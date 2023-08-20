import React from 'react'
import './ProfilePage.css'
import { useAPI } from '../../context/UserContext';

const ProfilePage = (props) => {
  const {authUser} = useAPI()
  console.log(authUser)
  return (
    <div className='content'>
      <header className='header'>
        <h3>Profile</h3>
        <div class='header-profile'>
          <img className='profile-picture-header' src={authUser.profilepicture} alt='profile-pic' />
          <span>{authUser.name}</span>
        </div>
      </header>
      <hr></hr>
      <div className="profile-container">
        <div class="profile detail">
        <img className='profile-picture-main' src={authUser.profilepicture} alt='profile-pic' />
          <h3>{authUser.name}</h3>
          <p>Username : {authUser.username}</p>
        </div>
        <div class="profile address">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage