
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';


const Metrics = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
      setIsOpen(!isOpen);
      console.log("clicked")
  };
  
   
    return (
        <>
            <div className='header-margin'></div>
         
<DashboardHeader handleToggle={handleToggle}/>

            <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
  
            <div className="content">
            <h1>Metrics</h1>
</div>
        </>
    )
}

export default Metrics;