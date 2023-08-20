import React from 'react'
import {List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import './SideBar.css'
const SideBar = () => {
  return (
    <div className="sidebar">
        <List>
          <div className='sidebar-items'>
            <ListItem component={Link} to={"/"}> 
                <ListItemText sx={{color:"white"}}>Profile</ListItemText>
            </ListItem>
            <Divider sx={{ bgcolor: "white", marginLeft:"10px", minWidth: "150px" }}/>
            <ListItem component={Link} to={"/posts"}>
                <ListItemText sx={{color:"white"}}>Posts</ListItemText>
            </ListItem>
            <Divider sx={{ bgcolor: "white", marginLeft:"10px", minWidth: "150px" }}/>
            <ListItem>
                <ListItemText>Gallery</ListItemText>
            </ListItem>
            <Divider sx={{ bgcolor: "white", marginLeft:"10px", minWidth: "150px" }}/>
            <ListItem>
                <ListItemText>ToDo</ListItemText>
            </ListItem>
            </div>
          
        </List>
      </div>
  )
}

export default SideBar