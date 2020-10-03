import React from "react"
import "./Section.css"
import { Link } from 'react-router-dom';

function Section({
    lightBg,
    topLine,
    lightText,
    description,
    bio,
    buttonLabel,
    lightButton,
    img,
    alt,
    imgStart
}) {
    return (
        <>
            <div
                className={lightBg ? 'light-section' : 'dark-section'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                            <h1 className={lightText ? 'heading-light' : 'heading-dark'}>{topLine}</h1>
                            <h2 className={lightText ? 'heading2-light' : 'heading2-dark'}>{description}</h2>
                            <p className={lightText ? 'heading3-light' : 'heading3-dark'}>{bio}</p>
                                <Link to='/about-us'>
                                <button className={lightButton ? 'light_btn' : 'dark_btn'}>
                                    <a href="#">{buttonLabel}</a>
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Section