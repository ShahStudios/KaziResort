import React from "react"
import "./RightSection.css"

const RightSection = () => {
    return (
        <div className="right__section" id="about">
            <div className="right__section__container">
                <div className="right__section__content">
                    <h1>Four Seasons Private Retreats</h1>
                    <h2>PUT TIME IN YOUR CALENDAR TO TRULY CONNECT</h2>
                    <p>Ipsum dolor sit amet consectetur adipisicing elit. Totam iusto aspernatur excepturi cupiditate enim! Nisi porro repudiandae ipsam aut. Voluptatum saepe architecto autem soluta dolorum accusantium maiores? Similique!
                    </p>
                    <button className="right__section__btn"><a href="#">EXPLORE MORE</a></button>
                </div>
                <div className="right__section__img--container">
                    <div className="right__section__img--card"><i className="fas fa-layer-group"></i></div>
                </div>
            </div>
        </div>
    )
}

export default RightSection