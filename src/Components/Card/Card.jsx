import React from 'react';
import './card.scss';

const Card = (props) => {
    return (
        <>
            <div className="card bio-wrapper">
                <div className="card-body">
                    <div className='text-center'>{props.icon}</div>
                    <div className="plan-name">{props.title}</div>
                    <div className="plan-description">
                        <div className="plan-price month font-bold" >{props.price}<sub> {props.time}</sub></div>
                        <p>{props.description}</p>
                    </div>
                    <div className="plan-description specs">
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_1}<br />
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_2}<br />
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_3}<br />
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_4}<br />
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_5}<br />
                        <i className="fa-solid fa-check" style={{ color: '#4C9196' }}></i> {props.line_6}<br />
                        {props.line_7}<br />
                        <div className="plan-cta text-lg-center pt-5 pb-1 text-sm-start">
                            <a href="https://wa.me/+923149011559">
                                <button className='btn primary-button'>Chat on Whatsapp</button>
                            </a>
                        </div>           
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
