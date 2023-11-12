import Banner from './components/Banner';
import './App.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Banner />
      <Outlet />
    </div>
  );
}

export default App;
