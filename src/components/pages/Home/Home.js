import React from 'react'
import VideoHero from '../../video-hero/VideoHero'
import Section from '../../content-section/Section'

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';


function Home() {
    
    return (
        <>
        <VideoHero />
        <Section {...homeObjOne}/>
        <Section {...homeObjTwo}/>
        <Section {...homeObjThree}/>
        <Section {...homeObjFour}/>
        <Section {...homeObjFive}/>
        </>
    );
}


export default Home