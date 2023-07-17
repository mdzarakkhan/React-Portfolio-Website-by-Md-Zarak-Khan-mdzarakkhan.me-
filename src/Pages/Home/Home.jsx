import React from "react";
import './home.scss';
import cv from '../../assets/Files/Muhammad Zarak Resume.pdf';
import profile_pic from '../../assets/Images/profile.jpg';
import { MobileSocial } from "../../Components/ExportComponents";
import { motion } from "framer-motion";

const Home = () => {



    return (
        <>
            <motion.section id="content-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                exit={{ opacity: 0 }}
            >


                <div className="container">
                    <div className="row content-wrapper">
                        <div className="col-lg-5 col-md-12 mx-auto">

                            {/* profile start for mobile device */}
                            <div className="profile text-center">

                                <div className="cover-pic">
                                    <img className="img-fluid rounded-circle dp" src={profile_pic} alt="" />
                                </div>

                                <div className="profile-body">
                                    <motion.h4
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}

                                        className="mt-3 font-bold" style={{ fontSize: '25px' }}>Muhammad <span style={{ color: "#4C9196" }}>Zarak</span>
                                    </motion.h4>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                                    
                                    style={{
                                        fontSize: '14px',
                                        fontFamily: 'monospace'

                                    }}>Software Engineer | React JS Developer<br /> | WordPress Developer |</motion.p>
                                    <MobileSocial />
                                    <div className="text-center" style={{ marginTop: '1rem' }}>
                                        <a href={cv}>
                                            <button className="btn primary-button">
                                                Download CV<i className="fa-solid fa-download"></i>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                                <hr />

                            </div>
                            {/* profile end for mobile device */}

                            {/* intro section start */}
                            <h3><span style={{ color: "#4C9196" }}>Pro</span>file</h3>
                            <div className="profile-wrapper">

                                <div className="data Location">

                                    <div className="icon d-flex">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <p className="text">Based in:</p>
                                    </div>

                                    <div>
                                        <p className="text2">Mardan, Pakistan</p>
                                    </div>

                                </div>

                                <div className="data Email">

                                    <div className="icon d-flex">
                                        <i className="fa-solid fa-envelope"></i>
                                        <p className="text">Email:</p>
                                    </div>

                                    <div>
                                        <a className="text2" href="mailto:mdzarakkhan@gmail.com">mdzarakkhan@gmail.com</a>

                                    </div>

                                </div>

                                <div className="data Phone">

                                    <div className="icon d-flex">
                                        <i className="fa-solid fa-phone"></i>
                                        <p className="text">Phone:</p>
                                    </div>

                                    <div>
                                        <a className="text2" href="https://wa.me/+923149011559">+92 3149011559</a>

                                    </div>

                                </div>

                                <div className="data Linkedin">

                                    <div className="icon d-flex">
                                        <i className="fa-brands fa-linkedin"></i>
                                        <p className="text">Linkedin:</p>
                                    </div>

                                    <div>
                                        <a href="https://www.linkedin.com/in/mdzarakkhan/">
                                            <i className="fa-solid fa-globe text"></i>
                                        </a>
                                    </div>

                                </div>

                                <div className="data Fiverr">

                                    <div className="icon d-flex">
                                        <i className="circle"></i>
                                        <p className="text">Fiverr:</p>
                                    </div>

                                    <div>
                                        <a href="https://www.fiverr.com/md_zarak_khan">
                                            <i className="fa-solid fa-globe text"></i>
                                        </a>
                                    </div>

                                </div>

                                <div className="data Upwork">

                                    <div className="icon d-flex">
                                        <i className="circle"></i>
                                        <p className="text">Upwork:</p>
                                    </div>

                                    <div>
                                        <a href="https://www.upwork.com/freelancers/~0182fd065637dfe6a4">
                                            <i className="fa-solid fa-globe text"></i>
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-7 col-md-12 mx-auto intro">
                            <h3 className="mt-sm-4 mt-lg-0"><span style={{ color: "#4C9196" }}>Intro</span>duction</h3>

                            <div className="bio-wrapper">


                                <p className="p-4 mt-3 text-center">I have done B.S Software Engineering from The Sarhad University of Peshawar and I am looking for an opportunity in any organization that will help me polish my skills and fulfill the demands of the company. I have enthusiasm and dedication that drives me to attain a challenging position as a Web Designer/Developer.</p>
                                <div className="text-center" style={{ marginTop: '-1rem' }}>
                                    <a href={cv}>
                                        <button className="btn primary-button mobile-none">
                                            Download CV<i className="fa-solid fa-download"></i>
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* intro section end */}

                        {/* skills section */}


                        <div className="col-lg-10 col-md-12  mx-auto">
                            <h3 className="mt-4 text-lg-center col-lg-10 col-md-12 text-sm-start"><span style={{ color: "#4C9196" }}>Ski</span>lls</h3>

                            <div className="pills-div d-block pt-2 skills-wrapper text-sm-center">

                                <div className="badge primary-button">HTML 5
                                    <i className="fa-brands fa-html5"></i>
                                </div>
                                <div className="badge primary-button">CSS 3
                                    <i className="fa-brands fa-css3-alt"></i>
                                </div>
                                <div className="badge primary-button">SASS
                                    <i class="fa-brands fa-sass fb"></i>
                                </div>
                                <div className="badge primary-button">BOOTSTRAP 4
                                    <i className="fa-brands fa-bootstrap"></i>
                                </div>
                                <div className="badge primary-button">JQUERY</div>
                                <div className="badge primary-button">REACT JS
                                    <i className="fa-brands fa-react"></i>
                                </div>
                                <div className="badge primary-button">JAVASCRIPT ES6
                                    <i className="fa-brands fa-square-js"></i>
                                </div>

                                <div className="badge primary-button">GIT
                                    <i className="fa-brands fa-git-alt"></i>
                                </div>
                                <div className="badge primary-button">GitHub
                                    <i className="fa-brands fa-github"></i>
                                </div>
                                <div className="badge primary-button">WORDPRESS
                                    <i class="fa-brands fa-wordpress"></i>
                                </div>
                                <div className="badge primary-button">MS OFFICE
                                    <i className="fa-solid fa-file-word"></i>
                                </div>
                                <div className="badge primary-button">ADOBE PHOTOSHOP</div>
                            </div>


                        </div>

                        {/* skills section end */}



                    </div>





                </div>
            </motion.section>




        </>
    )
}

export default Home;