import React from 'react';
// import NavBar from './Navbar';
import Nav from './Nav';
import Footer from './Footer';

import '../assets/styles/reset.css';
import '../assets/styles/main.css';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
