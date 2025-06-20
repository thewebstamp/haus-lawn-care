import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import PageNF from './pages/pageNF/pageNF';
import GPhotos from './pages/gPhotos/gPhotos';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNF />} />
        <Route path='/portfolio' element={<GPhotos />} />
      </Routes>
    </div>
  )
}

export default App