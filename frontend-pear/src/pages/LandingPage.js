import React from 'react';
import "../style.css";
import logo from "../img/Pear_logo.png";

export default function LandingPage() {
    return (
        <div>
            <section className="landing">
                <img src={logo} className="landing_logo" alt="logo"/>
                <h1>Welcome to Pear</h1>
                <h3>Connect with Pear</h3>
                <a href="/conversation" className="btn">Join Conversation</a>
            </section>

            <div className="bgImg" alt="bgImg"></div>

            <section className="about-pear">
                <h3 className="title">About Pear</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                    Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu. pien, id sagittis augue malesuad</p>
            </section>

        </div>
    );
}