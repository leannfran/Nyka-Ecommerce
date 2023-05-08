
import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../Cart';

const Layout = ({ children }) => {

  return (
    <div>
      <NavBar />
      <Cart open={false}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;