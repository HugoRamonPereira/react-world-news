import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
