import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Loading from './pages/Loading';
import Payment from './pages/Payment';
import Paymentpage from './pages/Paymentpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/makepayment' element={<Paymentpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
