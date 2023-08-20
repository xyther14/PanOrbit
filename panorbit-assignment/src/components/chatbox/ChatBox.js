import React from 'react'
import './ChatBox.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import { List, ListItem, Divider } from '@mui/material';
const ChatBox = (props) => {
    console.log(props)
    //remove current user from chat list
    const otherUsers = props.props[0].users.filter(user => user.id !== props.props[1].id);
    const [open, setOpen] = React.useState(false);
    const openChat = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="chat-bottom" onClick={openChat} style={{ bottom: open ? '50%' : '0' }}>
                <div className='chat-bottom-icon'>
                    <ChatBubbleOutlineIcon sx={{ marginRight: "12px" }} />
                    <h4>Chats</h4>
                </div>
                <KeyboardArrowUpIcon sx={{display : !open ? 'block' : 'none'}}/>
                <KeyboardArrowDownIcon sx={{display : !open ? 'none' : 'block'}}/>
            </div>
            <div className="chat-popup" style={{ display: open ? 'block' : 'none', bottom: open ? '20px' : '0'}}>
            <List style={{ maxHeight: '400px', overflow: 'auto' }}>
            {otherUsers?.length > 0 && otherUsers.map((user) => {
                    return <div className='list-item' key={user.id}>
                        <ListItem>
                            <div className='list-item-content'>
                                <img className='profile-picture' src={user.profilepicture} alt='profile-pic' />
                                {user.name}
                                <CircleIcon sx={{color: "green", width:"12px", marginLeft:"8px", height:"12px"}}/>
                            </div>
                        </ListItem>
                        <Divider />
                    </div>
                })}
                </List>
            </div>
        </div>
    );
}

export default ChatBox