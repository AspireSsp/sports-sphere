import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import Login from './pages/userAuth/Login';
import Register from './pages/userAuth/Register';
import Error from './pages/Error/Error';
import Teams from './pages/Teams/Teams';
import Players from './pages/players/Players';
import Sports from './pages/sports/Sports';
import Doc from './pages/documentation/Doc';
import About from './pages/abouts/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/teams' element={<Teams />}/>
            <Route path='/players' element={<Players />}/>
            <Route path='/Sports' element={<Sports />}/>
            <Route path='/documentation' element={<Doc />}/>
            <Route path='/about' element={<About />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/sign-up' element={<Register />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
