import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-slogan">
                <span>Lorem ipsum dolor sit amet.</span>
                <h2>Lorem ipsum dolor.</h2>
                <a href="/"> Şimdi Keşfet </a>
            </div>
            <div className="hero-image-container">
                <img src="/images/hero.png" alt="" className="hero-image" />
            </div>
        </section>
    );
}

export default Hero;
