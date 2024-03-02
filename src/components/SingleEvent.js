
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import SidebarEvent from './SidebarEvent';
import DashboardHeader from './DashboardHeader';
import axios from "axios";
import {baseUrl} from "../apiConfig";
import BreadCrumb from './BreadCrumb';

const SingleEvent = () => {
const {slug} = useParams();
    const [events, setEvents] = useState([])
    const fetchData = async()=> {
      const response = await axios.get(`${baseUrl}events/get-results`);
      setEvents(response.data); 
    }
  
    useEffect(()=>{
  fetchData();
    },[])

    const [event, setEvent] = useState(null)


    useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(`${baseUrl}events/get-eventbyslug?slug=${slug}`);
         setEvent(response.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
   
     fetchData();
   }, [slug]);
  


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        console.log("clicked")
    };
    

    return (
        <>
            <div className='header-margin'></div>
         
<DashboardHeader handleToggle={handleToggle}/>

            <SidebarEvent isOpen={isOpen} handleToggle={handleToggle} slug={slug}/>
  
            <div className="content">
  <BreadCrumb event={event} />

  <div className='d-flex flex-column flex-md-row justify-content-center gap-md-5 p-4'>
                                <button className="btn btn-primary border mb-3 mobile-width">Certificate Upload</button>
  <Link to="/bibgeneration" className="btn border btn-primary mb-3 mobile-width">Bib Generation</Link>
  <button className="btn border mb-3 mobile-width btn-primary">CRM</button>
             </div>

<div>Name: {event?.eventName}</div>
<div className='mt-2'>Description: {event?.aboutEvent}</div>
<div className='mt-2'>

        <table className='text-center'>
          <thead>
            <tr>
              <td className='p-2'>Category</td>
              <td className='p-2'>Registration Amount</td>
            </tr>
          </thead>
          {event?.category.map(cat => {
  return (
    <React.Fragment key={cat.name}>
      <tbody>
        <tr>
          <td>{cat.name}</td>
          <td>{cat.amount}</td>
        </tr>
      </tbody>
    </React.Fragment>
  )
})}
        </table>

</div>
</div>
        </>
    )
}

export default SingleEvent;