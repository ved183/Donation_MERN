import React from "react"
import"./App.css"
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Donate from "./components/Donate.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  return (
    <>
   <Router>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/donate' element={<Donate/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <ToastContainer position="top-center"/>
   </Router>
   </>
  )
}

export default App
