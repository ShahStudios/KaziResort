import React from 'react'
import '../../App.css'
import './VideoHero.css'
import { Button } from '../button/Button'

function VideoHero() {
    return (
        <div className='hero-container'>
            <video src='/Videos/vid-2.mp4' autoPlay loop muted />
            <p>Adventure Awaits</p>
            <h1>KAZI HOTELS AND RESORTS</h1>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                >
                    Explore More
        </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--medium'
                >
                    Check Rates 
                </Button>
            </div>
        </div>
    )
}

export default VideoHero