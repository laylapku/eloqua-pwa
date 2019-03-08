import React from "react";
import Card from './Card';
import speakerData from './speakerData';

const Speaker = ({ onRouteChange }) => {
  // add condition: if speaker id matches, then return
  return speakerData.map(ele => (
    <div onClick={() => onRouteChange('text')}>
      <Card />
    </div>
    
  ));
}


export default Speaker;
