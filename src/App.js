
import './App.css'

import NavBar from './components/navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { action, original } from './urls';

function App() {
  return (
    <div className='App'>
    <NavBar />
    <Banner />
    <RowPost url={original} title='Neflix Originals' />
    <RowPost  url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
