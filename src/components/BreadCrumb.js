import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../apiConfig";

const BreadCrumb = ({event}) => {
 
    return (
      <section className="py-10 px-3 py-3 d-flex items-center bg-blue">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                <div className="col-auto">Events</div>
                <div className="col-auto">&gt;</div>
                <div className="col-auto">{event?.eventName}</div>
              </div>
            </div>
          </div>
      </section>
    );
  };
  
  export default BreadCrumb;
  