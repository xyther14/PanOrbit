import React from 'react'
import { Divider } from '@mui/material'
const PostPage = () => {
  return (
    <div className='content'>
      <Divider sx={{marginLeft: "40px", marginRight:"20px", maxWidth:"80%"}}/>
        <div className='coming-soon-container'>
            <h1>Coming Soon</h1>
        </div>
    </div>
  )
}

export default PostPage