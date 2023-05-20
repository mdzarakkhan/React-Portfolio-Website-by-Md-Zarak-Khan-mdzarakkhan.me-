import React, { useRef } from 'react';
import './contact.scss';
import { motion } from "framer-motion";
import ReCAPTCHA from 'react-google-recaptcha';
import contactmd from '../../assets/Images/contact_mdzarakkhan.png'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_57952qd', 'template_koh31w6', form.current, 'fiw4LinZlL_fNAMbz')
            .then((result) => {
                alert('Your email has been received ')
            }, (error) => {
                alert('Sending Failed')
            });
        e.target.reset()
    };

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    return (
        <>
            <motion.section id="content-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                exit={{ opacity: 0 }}
            >
                <div className="container">
                    <div className="row content-wrapper ">
                        <div className="col-lg-12 col-md-12 mx-auto">
                            <h3><span style={{ color: "#4C9196" }}>Send</span> Email</h3>
                            <div className='row'>
                                <div className="col-lg-6 col-md-12 col-12 mt-5">
                                    <img className='img-fluid' src={contactmd} alt="contact" />
                                </div>
                                <div className='col-lg-6 col-md-12 col-12'>
                                    <div className="profile-wrapper">

                                        <form ref={form} onSubmit={sendEmail} style={{
                                            padding: '40px 20px 60px 20px',
                                            backgroundColor: '#EEEFEF'
                                        }} >
                                            <div className="mb-3">
                                                <input type="text" name="user_name" className="form-control p-2" placeholder="Your Name*" required />
                                            </div>

                                            <div className="mb-3">
                                                <input type="email" name="user_email" className="form-control p-2" placeholder="Your Email*" required />
                                            </div>

                                            <div className="mb-3">
                                                <input type="text" name="user_subject" className="form-control p-2" placeholder="Subject*" required />
                                            </div>

                                            <div className="mb-3">
                                                <textarea name="message" className="form-control p-2" placeholder="Message*" cols="30" rows="7" required></textarea>
                                            </div>
                                            <button type="submit" className="primary-button btn btn-md ">Send Email
                                                <i class="fa-regular fa-paper-plane"></i>
                                            </button>
                                            <ReCAPTCHA style={{marginTop:'3px'}}
                                                sitekey="6LdpyuslAAAAAGbL3V_x1DMwpTN31KOwWK7gOH2o"
                                                onChange={onChange}
                                            />
                                        </form>

                                        
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Contact;
