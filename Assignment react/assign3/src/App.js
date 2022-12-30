import logo from './logo.svg';
import './App.css';
import Shohi from './assign/Shohi';
import ShowDetail from './assign/ShowDetail';
import Base from './assign/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './assign/Header';


function App() {
  return (
    <div>
      {/* <Base>
        <BrowserRouter>
          <Routes>
            <Route path='header' element={<Header />}></Route>
            <Route path='shohi' element={<Shohi />}></Route>
            <Route path='viewdetail' element={<ShowDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </Base> */}
      <Shohi />
      <ShowDetail />
    </div>
  );
}

export default App;
