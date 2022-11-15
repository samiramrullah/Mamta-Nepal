import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Login from './common/Login';
import Navbar from './common/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App