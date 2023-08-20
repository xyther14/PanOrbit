import React from 'react'
import { useState } from 'react'
import './Header.css'
import { Modal, Box, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation();
    let title = "";
    switch (location.pathname) {
        case '/':
            title = 'Profile';
            break;
        case '/posts':
            title = 'Posts';
            break;
        case '/gallery':
            title = 'Gallery';
            break;
        case '/todo':
            title = 'ToDo';
            break;
        default:
            title = "";
    }
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onSignOut = () => {
        setOpen(false)
        navigate('/landing')
    }
    return (
        <>
            <div className='header' onClick={handleOpen}>
                <h3>{title}</h3>
                <div className='header-profile'>
                    <img className='profile-picture-header' src={props.props.profilepicture} alt='profile-pic' />
                    <span>{props.props.name}</span>
                </div>
            </div>
            <Modal className='modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: "absolute", top: "10%", right: "18%", bgcolor: "background.paper", padding: "12px", borderRadius: "18px" }}>
                    <div className='modal-content'>
                        <img className='profile-picture-main' src={props.props.profilepicture} alt='profile-pic' />
                        <p>{props.props.name}</p>
                        <span className='label'>{props.props.email}</span>
                    </div>
                    <Button onClick={onSignOut} color="primary" sx={{
                        borderRadius: 28, bgcolor: "#D55151", color: "white", '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                    }}>Sign Out</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Header