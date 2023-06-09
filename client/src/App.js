import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LangingPage/LangingPage';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';
import Page404 from './components/Page404/Page404';
import axios from 'axios';

axios.defaults.baseURL = "https://pi-videogames-main-production-8e3c.up.railway.app/"
//axios.defaults.baseURL = "https://localhost:3001/"

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Videogames</h1> */}
      <Routes>
        <Route exact path={'/'} element={<LandingPage />}/>
        <Route exact path={'/home'} element={<Home />} />
        <Route exact path={'/detail/:id'} element={<Detail />} />
        <Route exact path={'/create'} element={<Create />} />
        <Route path={'*'} element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
