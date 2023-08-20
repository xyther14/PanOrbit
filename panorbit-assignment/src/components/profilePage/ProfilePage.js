import React from 'react'
import './ProfilePage.css'
import { useAPI } from '../../context/UserContext';
import { Divider } from '@mui/material';
import { Map, Marker, ZoomControl } from "pigeon-maps";
const ProfilePage = () => {
  const { authUser } = useAPI()
  return (
    <div className='content'>
      <Divider sx={{marginLeft: "40px", marginRight:"20px", maxWidth:"80%"}}/>
      <div className="profile-container">
        <div className="profile detail">
          <img className='profile-picture-main' src={authUser.profilepicture} alt='profile-pic' />
          <h3>{authUser.name}</h3>
          <p><span className='label'>Username :</span> {authUser.username}</p>
          <p><span className='label'>e-mail :</span> {authUser.email}</p>
          <p><span className='label'>Phone :</span> {authUser.phone}</p>
          <p><span className='label'>Website :</span> {authUser.website}</p>
          <Divider sx={{ bgcolor: "white", margin: "30px" }} />
          <p><span className='label'>Company</span></p>
          <p><span className='label'>Name :</span> {authUser.company.name}</p>
          <p><span className='label'>catchphrase :</span> {authUser.company.catchPhrase}</p>
          <p><span className='label'>bs :</span> {authUser.company.catchPhrase}</p>
        </div>
        <Divider sx={{margin:"20px"}} orientation="vertical" flexItem />
        <div className="profile address">
          <p><span className='label'>Address :</span></p>
          <div className='address-section'>
            <p><span className='label'>Street : </span>{authUser.address.street}</p>
            <p><span className='label'>Suite : </span>{authUser.address.suite}</p>
            <p><span className='label'>City : </span>{authUser.address.city}</p>
            <p><span className='label'>Zipcode : </span>{authUser.address.zipcode}</p>
          </div>
          {/* Apparently the API geo codes doesn't have land geocodes so I am using default ones. To use from API we should map authUser.address.geo.lat etc */}
          <div className='map-container'>
          <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
            <ZoomControl />
          </Map>
          <div className='geo-Data'>
          <p style={{marginRight: "12px"}}><span className='label'>Lat : </span>{authUser.address.geo.lat}</p>
          <p><span className='label'>Long : </span>{authUser.address.geo.lng}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage