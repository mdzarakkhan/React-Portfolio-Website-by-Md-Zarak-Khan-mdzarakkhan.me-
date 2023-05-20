import React from 'react';
import { motion } from "framer-motion";
import './certificates.scss';
import c_1 from '../../assets/Images/certificates/Muhammad Zarak Internship Certificate from CodePrisma.com.jpg';
import c_2 from '../../assets/Images/certificates/Muhammad Zarak Internship Certificate from Softhat IT Solutions.png';


const Certificates = () => {

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
              <h3><span style={{ color: "#4C9196" }}>Cert</span>ificates</h3>
              <div className=" text-center" style={{ width: '100%', height: 'auto' }}>
                {/* <!-- Gallery --> */}
                <div className="row ">
                  <div className="col-lg-4 col-md-12 mt-4 mb-4 mb-lg-0 ">
                    <img
                      src={c_2}
                      className="w-100 shadow-1-strong rounded mb-4"
                      alt="SoftHat IT Solution"
                    />
                    <h6>SofHat IT Solutions</h6>


                  </div>

                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src={c_1}
                      className="w-100 shadow-1-strong rounded mb-4"
                      alt="CodePrisma"
                    />
                    <h6>CodePrisma</h6>


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

export default Certificates;