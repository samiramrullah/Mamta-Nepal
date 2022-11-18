import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Login from './common/Login';
import Navbar from './common/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
// import Footer from './common/Footer';
import Profile from './common/UserProfile/Profile';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login/:login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App