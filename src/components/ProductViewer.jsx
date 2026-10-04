import React, { useState } from "react";
import "./ProductViewer.css";

const ProductViewer = () => {
  const [side, setSide] = useState("front");

  const frontImage = "/products/3-In-1%20Face%20Wash/front.png";
  const backImage = "/products/3-In-1%20Face%20Wash/back.png";

  const rotateProduct = () => {
    setSide((currentSide) =>
      currentSide === "front" ? "back" : "front"
    );
  };

  return (
    <section className="product-viewer" id="product-viewer">
      <div className="product-viewer-container">

        {/* LEFT CONTENT */}
        <div className="product-viewer-content">
          <span className="product-viewer-eyebrow">
            ELEMENTS WELLNESS
          </span>

          <h2>
            Take a closer
            <br />
            look.
          </h2>

          <p>
            Explore the Elements 3-In-1 Face Wash.
            View the front and back of the product
            with a smooth interactive rotation.
          </p>

          <div className="product-controls">

            <button
              className={side === "front" ? "active" : ""}
              onClick={() => setSide("front")}
            >
              Front
            </button>

            <button
              className={side === "back" ? "active" : ""}
              onClick={() => setSide("back")}
            >
              Back
            </button>

            <button
              className="rotate-btn"
              onClick={rotateProduct}
            >
              ↻ Rotate
            </button>

          </div>
        </div>

        {/* PRODUCT VIEWER */}
        <div className="product-stage">

          <div
            className={`product-flip-card ${
              side === "back" ? "show-back" : ""
            }`}
          >

            {/* FRONT */}
            <div className="product-side product-front">
              <img
                src={frontImage}
                alt="Elements 3-In-1 Face Wash Front"
              />
            </div>

            {/* BACK */}
            <div className="product-side product-back">
              <img
                src={backImage}
                alt="Elements 3-In-1 Face Wash Back"
              />
            </div>

          </div>

          {/* FLOOR SHADOW */}
          <div className="product-shadow"></div>

          {/* VIEW LABEL */}
          <div className="product-view-label">
            <span>
              {side === "front" ? "FRONT VIEW" : "BACK VIEW"}
            </span>

            <small>
              {side === "front"
                ? "View product front"
                : "View product details"}
            </small>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductViewer;