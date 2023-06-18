import React from 'react';
import Navbar from './NavbBar';
import Footer from './Footer';

import '../assets/styles/reset.css';
import '../assets/styles/main.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
