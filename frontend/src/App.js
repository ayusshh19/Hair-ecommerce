import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Loading from './pages/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/loading' element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
