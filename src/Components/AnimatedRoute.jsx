import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Education, Contact, Services, Projects, Certificates } from '../Pages/ExportPages';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoute = () => {
    
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path='/certificates' element={<Certificates />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute;