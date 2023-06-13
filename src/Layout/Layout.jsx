import React from 'react';
 
import Header from './Header/Header';
 
import { Outlet } from 'react-router-dom';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer'; 
import { useMatch } from 'react-router-dom';

const Layout = () => {
    const match = useMatch('/');
 
    return (
        <>
      {match?<>
      <Slider>
        <Header/>
      </Slider>
      </>:<>
      <Header/></>}
     
     
 
<Outlet/>



 


       <Footer/>
   
 
        </>
    );
}

export default Layout;
