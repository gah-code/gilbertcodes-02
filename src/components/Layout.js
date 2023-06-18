import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

import '../assets/styles/reset.css';
import '../assets/styles/main.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
