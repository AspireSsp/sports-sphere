import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './compoent/Navbar';
import Home from './pages/home/Home';
import Login from './pages/userAuth/Login';
import Register from './pages/userAuth/Register';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            
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
