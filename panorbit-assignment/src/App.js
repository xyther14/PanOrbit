import './App.css';
import SideBar from './components/sidebar/SideBar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
      <div className='d-flex'>
        <SideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
