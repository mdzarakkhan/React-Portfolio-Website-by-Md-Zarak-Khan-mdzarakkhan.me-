import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss';
import profile_pic from '../../assets/Images/profile.jpg';
import { Social } from "../ExportComponents";
import { motion } from "framer-motion";



const Header = () => {



    return (

        <>
            <div id="side_header">
                {/* profile start */}
                <div className="profile text-center">

                    <div className="cover-pic">
                        <img className="img-fluid rounded-circle dp" src={profile_pic} alt="" />
                    </div>

                    <div className="profile-body">

                        <motion.h5
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                            className="mt-3 font-bold title">Muhammad <span style={{ color: "#4C9196" }}>Zarak</span>
                        </motion.h5>


                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                        
                        style={{
                            fontFamily: 'monospace',
                            fontSize: '13.5px',
                            paddingLeft: '4px'

                        }}>Software Engineer | React JS Developer<br /> | WordPress Developer |</motion.p>

                    </div>


                </div>
                {/* profile end */}

                {/* social icons start */}

                <Social />
                <div className="d-flex justify-content-center social-hr">
                    <hr style={{
                        width: '90%',
                    }} />
                </div>


                {/* social icons end */}

                {/* navbar start */}
                <div className="navbar">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="fa-solid fa-user "></i> <span className="link-name">Profile</span></NavLink>
                        </li>
                        

                        <li className="nav-item">
                            <NavLink className="nav-link " to="/education">
                                <i className="fa-solid fa-graduation-cap"></i><span className="link-name">Education</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/projects">
                                <i className="fa-solid fa-folder-open"></i><span className="link-name">Projects</span></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to="/services">
                                <i className="fa-solid fa-code"></i><span className="link-name">Services</span></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to="/certificates">
                                <i className="fa-solid fa-certificate"></i><span className="link-name">Certificates</span></NavLink>
                        </li>

                        <li className="nav-item" id="contact-link">
                            <NavLink className="nav-link " to="/contact">
                                <i className="fa-solid fa-envelope"></i><span className="link-name">Contact</span></NavLink>
                        </li>


                    </ul>
                </div>
                {/* navbar end */}
            </div>
        </>
    );



}
export default Header;

