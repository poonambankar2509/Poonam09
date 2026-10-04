import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* LEFT */}
        <div className="hero-text">
          <p className="hero-small-title">
            ELEMENTS WELLNESS
          </p>

          <h1>
            Trusted Wellness
            <br />
            <span>for Every Home</span>
          </h1>

          <p className="hero-description">
            Genuine Elements Wellness products for everyday health,
            from an <strong>Authorized Distributor in Maharashtra.</strong>
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Now →
            </button>

            <button className="explore-btn">
              Explore Products
            </button>
          </div>
        </div>

        {/* RIGHT / PRODUCT VIDEO */}
        <div className="hero-visual">
          <video
            src="/videos/elements-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;