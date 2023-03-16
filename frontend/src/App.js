import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Loading from './pages/Loading';
import Payment from './pages/Payment';
import Paymentpage from './pages/Paymentpage';
import Admin from './pages/Admin';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Tree from './components/Tree';
//useEffect
function App() {
  useEffect(() => {
    AOS.init();
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/makepayment' element={<Paymentpage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/Tree' element={<Tree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
