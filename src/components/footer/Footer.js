import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div class='up-section'>
                <ul>
                    <h1>About</h1>
                    <li><a href='#'>ABOUT US</a></li>
                    <li><a href='#'>CAREERS</a></li>
                    <li><a href='#'>CONTACT US</a></li>
                </ul>
                <ul>
                    <h1>Reservations</h1>
                    <li><a href='#'>REQUEST AN INVOICE</a></li>
                    <li><a href='#'>FIND A RESERVATION</a></li>
                    <li><a href='#'>EMAIL PREFERENCES</a></li>
                </ul>
                <ul>
                    <h1>News</h1>
                    <li><a href='#'>PRESS ROOM</a></li>
                    <li><a href='#'>NEW OPENINGS</a></li>
                    <li><a href='#'>MAGAZINE</a></li>
                    <li><a href='#'>NEWSLETTER</a></li>
                </ul>
                <ul>
                    <h1>More</h1>
                    <li><a href='#'>PRIVATE JET</a></li>
                    <li><a href='#'>RESIDENCES</a></li>
                    <li><a href='#'>GIFT CARDS</a></li>
                    <li><a href='#'>PRIVATE RETREATS</a></li>
                </ul>
            </div>
            <p className='copyright'>
                ©KAZI Resort 2020. All Rights Reserved.
                </p>
        </footer>
    )
}

export default Footer