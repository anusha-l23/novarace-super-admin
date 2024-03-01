
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Home = () => {


    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <>
            <div className='header-margin'></div>
            <header className={`header p-4 ${navbar ? "is-sticky" : ""}`}>
                <div className="header__container px-30 sm:px-20">
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <Link to="/" className="header-logo mr-20">
                            <img src="/img/general/logo-light.svg" alt="logo icon" />
                        </Link>


                        <Link
                            to="/login"
                            className="button btn px-3 fw-400 text-14 border-white -outline-white h-50 text-white"
                        >
                            Login
                        </Link>
                    </div>

                </div>
                {/* <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                    <div>
                        <Link
                            to="/login"
                            className="d-flex items-center icon-user text-inherit text-22"
                        />
                    </div>
                    <div>
                        <button
                            className="d-flex items-center icon-menu text-inherit text-20"
                            data-bs-toggle="offcanvas"
                            aria-controls="mobile-sidebar_menu"
                            data-bs-target="#mobile-sidebar_menu"
                        />

                        <div
                            className="offcanvas offcanvas-start  mobile_menu-contnet"
                            tabIndex="-1"
                            id="mobile-sidebar_menu"
                            aria-labelledby="offcanvasMenuLabel"
                            data-bs-scroll="true"
                        >
                             <MobileMenu />
                        </div>
                    </div>
                </div> */}




            </header>
            
        </>
    )
}

export default Home