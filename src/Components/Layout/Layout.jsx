import React from 'react';
import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../Home/TopNavbar';
import Footer from '../Home/Footer';

const Layout = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;