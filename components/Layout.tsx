import { Divider } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({ children }: LayoutProps) => {
    
    return (
        <div>
            <Navbar />
            <Divider orientation='horizontal' borderColor='#d4ff1e'/>
            {children}
            <Divider orientation='horizontal' borderColor='#d4ff1e'/>
            <Footer />
        </div>
    )
}
export default Layout;