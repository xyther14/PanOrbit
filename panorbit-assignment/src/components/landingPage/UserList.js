import React from 'react'
import './UserList.css';
import Card from '@mui/material/Card';
import {List, ListItem, Divider } from '@mui/material';
import {  useNavigate } from "react-router-dom";
import { useAPI } from '../../context/UserContext';
const UserList = (props) => {
    const { setAuthUser } = useAPI();
    const navigate = useNavigate()
    const handleClick = (userData) => {
        setAuthUser(userData);
        navigate('/')
    }
    return (
        <Card sx={{ maxHeight: '500px', minWidth: '500px' }}>
            <div className='card-title'>
                <span>Select an Account</span>
            </div>
            <List style={{ maxHeight: '400px', overflow: 'auto' }}>
                {props.users?.length > 0 && props.users.map((user) => {
                    return <div className='list-item' key={user.id} onClick={() => {handleClick(user)}}>
                        <ListItem>
                            <div className='list-item-content'>
                                <img className='profile-picture' src={user.profilepicture} alt='profile-pic' />
                                {user.name}
                            </div>
                        </ListItem>
                        <Divider />
                    </div>
                })}
            </List>
        </Card>
    )
}

export default UserList