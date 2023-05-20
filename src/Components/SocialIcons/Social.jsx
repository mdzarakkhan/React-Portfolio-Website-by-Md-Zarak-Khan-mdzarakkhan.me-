import React from 'react';
import './social.scss';

const Social = () => {
    return (
        <>
            <div className="social-buttons d-flex justify-content-center">
                <a href="https://web.facebook.com/mdzarakkhan1/" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                    <span className="social-button__inner">
                        <i className="fab fa-facebook-f"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/mdzarakkhan/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                    <span className="social-button__inner">
                        <i className="fab fa-linkedin-in"></i>
                    </span>
                </a>

                <a href="https://github.com/mdzarakkhan" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <span className="social-button__inner">
                        <i className="fab fa-github"></i>
                    </span>
                </a>

                <a href="https://github.com/mdzarakkhan" className="social-buttons__button social-button social-button--twitter" aria-label="Twitter">
                    <span className="social-button__inner">
                        <i className="fab fa-twitter"></i>
                    </span>
                </a>

                <a href="https://wa.me/+923149011559" className="social-buttons__button social-button social-button--whatsapp" aria-label="Whatsapp">
                    <span className="social-button__inner">
                        <i className="fa-brands fa-whatsapp"></i>
                    </span>
                </a>



            </div>
        </>
    )
}

export default Social;