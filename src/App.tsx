
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import RepositoryPage from './pages/RepositoryPage'
import LoginPage from './pages/LoginPage'

function App() {
 

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AuthPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/repo' element={<RepositoryPage/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
