import React from 'react';

const Navbar = ({ onRouteChange }) => {
    return ( 
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')}>Home</p>
        </nav>
    );
}

export default Navbar;
