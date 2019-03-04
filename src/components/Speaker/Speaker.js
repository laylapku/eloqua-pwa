import React from 'react';
import './Speaker.css';

const Speaker = ({ onRouteChange }) => {
    return ( 
        <div className='card-container'>
            <div onClick={() => onRouteChange('speech')} className='card'>Steve Jobs</div>
        </div>
        
    );
}

export default Speaker;
