import logo from './logo.svg';
import './App.css';
import Base from './components/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import Tracker from './components/Tracker';
import ViewDefect from './components/ViewDefect';
import AddDefect from './components/AddDefect';
import Login from './components/Login';
import UpdateStatus from './components/UpdateStatus';
import Register from './components/Register';
import AuthenticationService from './service/AuthenticationService';

function App() {
  const login=(username)=>{
    AuthenticationService.login(username)
  }
  return (
    <div>
      <Base>
        <BrowserRouter>
          <Routes>
            <Route path='user' element={<User />}></Route>
            <Route path='admin' element={<Admin />}></Route>
            <Route path='tracker' element={<Tracker />}></Route>
            <Route path='viewdef' element={<ViewDefect />}></Route>
            <Route path='adddef' element={<AddDefect />}></Route>
            <Route path='login' element={<Login login={login} />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='updatestatus' element={<UpdateStatus />}></Route>
          </Routes>
        </BrowserRouter>
      </Base>
    </div>
  );
}

export default App;
