import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Buy from './pages/Buy'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login';
import { AppContext } from './components/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const { showLogin } = useContext(AppContext)
  return (

    <div className="bg-gray-900 text-white min-h-screen">
      <Router>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <Nav />
        {showLogin && <Login />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App