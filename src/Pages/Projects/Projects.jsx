import React from 'react';
import { motion } from "framer-motion";
import overbrains from '../../assets/Images/websiteDesigns/overbrains.com.webp';
import agrindtool from '../../assets/Images/websiteDesigns/agrindtool.webp';
import davidleesbtq from '../../assets/Images/websiteDesigns/davidleesbtq.com.webp';
import mdzarakkhan from '../../assets/Images/websiteDesigns/mdzarakkhan.webp';
import mdzarakkhan2 from '../../assets/Images/websiteDesigns/mdzarakkhan2.webp';
import giosyt from '../../assets/Images/websiteDesigns/giosyt.in.webp';
import nurangi from '../../assets/Images/websiteDesigns/nurangi.com.webp';
import dreamacake from '../../assets/Images/websiteDesigns/dreamacake.com.webp';
import momnme from '../../assets/Images/websiteDesigns/momnme.pk.webp';


const Projects = () => {
    return (
        <>
            <motion.section id="content-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                exit={{ opacity: 0 }}
            >
                <div className="container">
                    <div className="row content-wrapper">
                        <div className="col-lg-12 col-md-12 mx-auto">
                            <h3><span style={{ color: "#4C9196" }}>Pro</span>jects</h3>
                            <div className=" py-4">


                                {/* <!-- Gallery --> */}



                                <div className="row ">
                                    <div className="col-lg-4 col-md-12  mb-4 mb-lg-0 ">
                                        <a href="https://overbrains.com"> <img
                                            src={overbrains}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="agrintool"

                                        />
                                        </a>
                                        <h6 className='text-center'>overbrains.com <span style={{ fontSize: '10px', color: "#4C9196" }}>(Business)</span></h6>
                                    </div>

                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                                        <a href="https://agrindtool.com"><img
                                            src={agrindtool}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="agrintool"
                                        />
                                        </a>
                                        <h6 className='text-center'>agrindtool.com <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mb-4 mb-lg-0">
                                        <a href="https://davidleesbtq.com"><img
                                            src={davidleesbtq}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="davidleesbtq.com"
                                        />
                                        </a>
                                        <h6 className='text-center'>davidleesbtq.com <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <img
                                            src={mdzarakkhan}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="mdzarakkhan"
                                        />
                                        <h6 className='text-center'>mdzarakkhan <span style={{ fontSize: '10px', color: "#4C9196" }}>(Portfolio)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <img
                                            src={mdzarakkhan2}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="mdzarakkhan2"
                                        />
                                        <h6 className='text-center'>mdzarakkhan2 <span style={{ fontSize: '10px', color: "#4C9196" }}>(Portfolio)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <img
                                            src={giosyt}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="giosyt.in"
                                        />
                                        <h6 className='text-center'>giosyt.in <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <a href="http://nurangi.com/"><img
                                            src={nurangi}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="giosyt.in"
                                        />
                                        </a>
                                        <h6 className='text-center'>nurangi.com <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce Multi Vendor)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <a href="https://momnme.pk">
                                            <img
                                                src={momnme}
                                                className="w-100 shadow-1-strong rounded mb-4"
                                                alt="giosyt.in"
                                            />
                                        </a>
                                        <h6 className='text-center'>momnme.pk <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce)</span></h6>
                                    </div>

                                    <div className="col-lg-4 mt-4 mb-4 mb-lg-0">
                                        <a href="http://dreamacake.com/"><img
                                            src={dreamacake}
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt="giosyt.in"
                                        />
                                        </a>
                                        <h6 className='text-center'>dreamacake.com <span style={{ fontSize: '10px', color: "#4C9196" }}>(eCommerce)</span></h6>
                                    </div>


                                </div>
                                {/* <!-- Gallery --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Projects