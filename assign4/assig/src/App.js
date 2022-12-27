import logo from './logo.svg';
import './App.css';
import Base from './components/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import AddBook from './components/AddBook';
import Welcome from './components/Welcome';

function App() {
  return (
      <Base>
        <BrowserRouter>
          <Routes>
            <Route path='home' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='addbook' element={<AddBook />}></Route>
            <Route path='welcome' element={<Welcome />}></Route>
          </Routes>
        </BrowserRouter>
      </Base>
  );
}

export default App;
