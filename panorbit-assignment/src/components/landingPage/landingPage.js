import Wave from '../../designs/wave'
import UserList from './UserList'
import './landingPage.css'
import { useAPI } from '../../context/UserContext'
import Grid from '@mui/material/Grid';

const LandingPage = () => {
    const {users} = useAPI();
    return (
        <Grid>
            <div className='landingPage'>
            <div className="layer1">
            <Wave />
            </div>
            <div className="layer2">
                <UserList users={users?.users}/>
            </div>
        </div>
        </Grid>
    )
}

export default LandingPage