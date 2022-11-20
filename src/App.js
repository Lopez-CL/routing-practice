import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Home from './components/Home';
import OtherRoutes from './components/OtherRoutes';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing es Divertida!</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/:data' element={<OtherRoutes/>}/>
          <Route path='/:data/:textColor/:bgColor' element={<OtherRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
