import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import SignIn from './pages/Authpages/SignIn'
import Err404 from './components/Errors/Err404'
import SignUp from './pages/AuthPages/SignUp'
import VerifyEmail from './pages/AuthPages/VerifyEmail'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<HomePage /> } />
                    <Route path='*' element={<Err404 /> } />
                    <Route path='/' element={<SignIn /> } />
                    <Route path='/Signup' element={<SignUp />} />
                    <Route path='/verify-email' element={<VerifyEmail />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
