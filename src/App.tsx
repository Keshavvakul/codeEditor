import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from "./container/"

function App() {

  return (
    <div className='w-screen h-screen flex items-start justify-start overflow-hidden'>
      <Routes>
        <Route path='/home/*' element={<Home />} />

        {/* If the route is not matching*/}
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
    </div>
  )
}

export default App
