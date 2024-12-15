import React from 'react';
// we import Outlet as we need to get the page we are on from the router
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
