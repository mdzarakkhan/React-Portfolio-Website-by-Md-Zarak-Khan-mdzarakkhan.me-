import React from 'react';
import { TimelineEducation } from '../../Components/ExportComponents';
import { motion } from "framer-motion";


const Education = () => {

 
  return (

    <>
      <motion.section id="content-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
        exit={{ opacity: 0 }}
      >

        <div className="container">
          <div className="row content-wrapper">
            <div className="col-12">
              <h3><span style={{ color: "#4C9196" }}>Edu</span>cation</h3>
              <div className="profile-wrapper ">

                {/* education timeline */}

                <TimelineEducation
                  // university
                  years='2019 - 2023'
                  years_bottom='4 Years'
                  qualification='BS Software Engineering'
                  place='The Sarhad University of Peshawar'

                  // fsc
                  years2='2016 - 2017'
                  years_bottom2='2 Years'
                  qualification2='F.Sc Pre-ENGG'
                  place2='Success College,Mardan'

                  // school
                  years3='2014 - 2015'
                  years_bottom3='2 Years'
                  qualification3='Matriculation'
                  place3='Govt High School Sharqi Hoti Mardan'

                />
              </div>
              <div className='col-12'>
                <h3><span style={{ color: "#4C9196" }}>Exp</span>erience</h3>
                <div className="profile-wrapper ">

                  {/* experience timeline */}

                  <TimelineEducation

                    // university
                    years='MAY - 2021'
                    years_bottom='2 Years'
                    qualification='Freelance Web Developer'
                    place='Fiverr & Upwork / Mardan'

                    // fsc
                    years2='FEB - 2021'
                    years_bottom2='7 Months'
                    qualification2='Web Designer'
                    place2='Softhat IT Solutions / Peshawar'

                    // school
                    years3='AUG - 2022'
                    years_bottom3='7 Months'
                    qualification3='Web Developer'
                    place3='Code Prisma / Mardan and Peshawar'

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


    </>
  )
}

export default Education;