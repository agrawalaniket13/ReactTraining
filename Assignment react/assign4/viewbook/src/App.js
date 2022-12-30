import logo from './logo.svg';
import './App.css';
import Base from './components/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import ViewAll from './components/ViewAll';
import Login from './components/Login';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <div>
      <Base>
        <BrowserRouter>
          <Routes>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='viewall' element={<ViewAll />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='viewbook' element={<ViewBook />}></Route>
          </Routes>
        </BrowserRouter>
      </Base>
    </div>
  );
}

export default App;
