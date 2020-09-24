import React from 'react';
import './Section.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function Section({

}) {
    return (
        <>
            <div className='section-container'>
                <div className='section-row'>
                    <div classNasme='section-col'>
                        <div className='section-text-wrapper'>
                            <div className="card">
                                <div className="card__img" id="img01"> </div>
                                <div className="card__content">
                                    <p className="card__content-theme">Welcome Back</p>
                                    <h2 className="card__content-header">PUT TIME IN YOUR CALENDAR TO TRULY CONNECT</h2>
                                    <p className="card__content-paragraph">A centralized place for all the relevant information you need to plan your next adventure with us.</p>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--black'
                                        buttonSize='btn--medium'
                                    >
                                        EXPLORE MORE
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-row'>
                    <div classNasme='section-col'>
                        <div className='section-text-wrapper'>
                            <div className="card">
                                <div className="card__content">
                                    <p className="card__content-theme">Kazi Resorts Private Jet</p>
                                    <h2 className="card__content-header">PREVIEW OUR NEW JET TAKING FLIGHT 2021</h2>
                                    <p className="card__content-paragraph">Reimagined for a Kazi resorts experience in the sky like never before, the new Jet offers an even more modern, enriching and interactive flight experience.</p>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--black'
                                        buttonSize='btn--medium'
                                    >
                                        VIEW NOW
                                    </Button>
                                </div>
                                <div className="card__img" id="img02"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-row'>
                    <div classNasme='section-col'>
                        <div className='section-text-wrapper'>
                            <div className="card">
                                <div className="card__img" id="img03"> </div>
                                <div className="card__content">
                                    <p className="card__content-theme">Residences</p>
                                    <h2 className="card__content-header">AT HOME WITH KAZI RESORTS</h2>
                                    <p className="card__content-paragraph">Explore all the joys of living with Kazi Seasons and wake up every day to legendary Kazi Seasons service and world-class amenities.</p>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--black'
                                        buttonSize='btn--medium'
                                    >
                                        EXPLORE LOCATIONS
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-row'>
                    <div classNasme='section-col'>
                        <div className='section-text-wrapper'>
                            <div className="card">
                                <div className="card__content">
                                    <p className="card__content-theme">Fit with Kazi Resorts</p>
                                    <h2 className="card__content-header">FITNESS TIPS FOR TRAVELLERS</h2>
                                    <p className="card__content-paragraph">Whether you’re travelling for business or pleasure, exercising while on the go can be a challenge. Celebrity trainer Harley Pasternak has developed simple yet inspiring fitness videos to help guests stay active even when travelling.</p>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--black'
                                        buttonSize='btn--medium'
                                    >
                                        Watch Now
                                    </Button>
                                </div>
                                <div className="card__img" id="img04"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-row'>
                    <div classNasme='section-col'>
                        <div className='section-text-wrapper'>
                            <div className="card">
                                <div className="card__img" id="img05"> </div>
                                <div className="card__content">
                                    <p className="card__content-theme">Kazi Resorts Private Retreats</p>
                                    <h2 className="card__content-header">RENT A HOME WITH KAZI RESORTS</h2>
                                    <p className="card__content-paragraph">Our villas and homes provide the perfect stage for unforgettable moments that are distinctly yours, featuring legendary Kazi Resorts service and amenities, with all the comforts of home.</p>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--black'
                                        buttonSize='btn--medium'
                                    >
                                        DISCOVER NOW
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;
