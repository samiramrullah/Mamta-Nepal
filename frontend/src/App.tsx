import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Login from './common/Login';
import Navbar from './common/Navbar';
import About from './pages/About';
import Services from './pages/Services';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login/:login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App