import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Home from './components/Home';
import OtherRoutes from './components/OtherRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:data' element={<OtherRoutes/>}/>
          <Route path='/:data/:textColor/:bgColor' element={<OtherRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
