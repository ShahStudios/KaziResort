import React from "react"
import "./LeftSection.css"

const LeftSection = () => {
    return (
        <div className="main" id="about">
            <div className="main__container">
                <div className="main__img--container">
                    <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
                </div>
                <div className="main__content">
                    <h1>Welcome Back</h1>
                    <h2>PUT TIME IN YOUR CALENDAR TO TRULY CONNECT</h2>
                    <p>Ipsum dolor sit amet consectetur adipisicing elit. Totam iusto aspernatur excepturi cupiditate enim! Nisi porro repudiandae ipsam aut. Voluptatum saepe architecto autem soluta dolorum accusantium maiores? Similique!
                    </p>
                    <button className="main__btn"><a href="#">EXPLORE MORE</a></button>
                </div>
            </div>
        </div>
    )
}

export default LeftSection