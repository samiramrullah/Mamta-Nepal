import React from 'react'
import Index from './pages/Index'
import {Routes, Route} from 'react-router-dom';
import Error from './pages/Error';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App