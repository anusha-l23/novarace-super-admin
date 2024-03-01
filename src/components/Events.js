
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import axios from "axios";
import {baseUrl} from "../apiConfig";

const Events = () => {

    const [events, setEvents] = useState([])
    const fetchData = async()=> {
      const response = await axios.get(`${baseUrl}events/get-results`);
      setEvents(response.data); 
    }
  
    useEffect(()=>{
  fetchData();
    },[])
console.log(events)
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
            <div className="row y-gap-20 justify-center items-center">        
            <div className="row y-gap-30">
   
            {events.map((item) => (
        <div
        className="col-lg-3 col-sm-6"
        key={item?.id}
      >
        
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
              <Link
          to={`/event/${item.slug}`}
          className="hotelsCard -type-1 hover-inside-slider"
        >
<img src={item?.eventPicture} className="img-thumbnail" style={{width:"300px", height:"300px"}} alt="Event" 
/>
</Link>
                <div className="cardImage__leftBadge">    
                  <div
                    className={`px-20 py-1 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "Open")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "Closed")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    } ${
                      isTextMatched(item?.tag, "Fast Filling")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                    `}
                  >
                    { item?.tag }
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content">
      <Link
          to={`/event/${item.slug}`}
          className="hotelsCard -type-1"
        >
              <h5 className="hotelsCard__title text-14 fw-500 mt-4">
                <span>{item?.eventName}</span>
              </h5>
              <p className="text-14">
                {item?.location}
              </p>
              <p className="text-14">
                {item?.date?.split("T")[0]}
              </p>
             </Link>
            </div>
     
        </div>
      ))}
                </div>

</div>
</div>
        </>
    )
}

export default Events

function isTextMatched(tag, match) {
    if (tag && match && typeof tag === 'string' && typeof match === 'string') {
      const lowercaseTag = tag.toLocaleLowerCase();
      const lowercaseMatch = match.toLocaleLowerCase();
      
      return lowercaseTag === lowercaseMatch;
    }
    return false;
  }