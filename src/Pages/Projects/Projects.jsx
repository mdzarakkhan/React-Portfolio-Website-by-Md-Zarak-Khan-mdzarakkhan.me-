import React from 'react';
import { motion } from "framer-motion";
import projectsData from '../../data/projectsData';



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

                                <div className="row">
                                    {projectsData.map((project) => (
                                        <div className="col-lg-4 col-md-12 mb-5 mb-lg-0" key={project.id}>
                                            <img src={project.src} className="w-100 shadow-1-strong rounded mb-4" alt={project.alt} />
                                            <h6 className="text-center mb-4">
                                                {project.text} <span style={{ fontSize: '10px', color: '#4C9196' }}>{project.subtext}</span>
                                            </h6>
                                        </div>
                                    ))}
                                </div>

                                {/* <!-- Gallery End--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Projects