import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import CreateSchedul from './pages/CreateSchedul';
import MySchedul from './pages/MySchedul';
import UpdateWorkout from './pages/UpdateWorkout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createschedul" element={<CreateSchedul />} />
        <Route path="/View" element={<MySchedul />} />
        <Route path="/updateworkout/:workId" element={<UpdateWorkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
