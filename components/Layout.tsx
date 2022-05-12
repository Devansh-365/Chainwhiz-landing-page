import { Divider } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout:React.FC = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
    
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