import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onBack }) {
  const [imageIndex, setImageIndex] = useState(0);

  const images = product?.images || [];

  const nextImage = () => {
    if (images.length <= 1) return;

    setImageIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const previousImage = () => {
    if (images.length <= 1) return;

    setImageIndex(
      (prev) =>
        (prev - 1 + images.length) %
        images.length
    );
  };

  if (!product) return null;

  return (
    <main className="product-details">

      {/* BACK */}
      <button
        className="product-back"
        onClick={onBack}
      >
        ← Back to Products
      </button>


      <section className="product-details-card">

        {/* IMAGE SIDE */}
        <div className="product-details-image">

          {images.length > 0 ? (
            <img
              src={images[imageIndex]}
              alt={product.name}
            />
          ) : (
            <div className="details-placeholder">
              ELEMENTS
            </div>
          )}


          {/* IMAGE ARROWS */}

          {images.length > 1 && (
            <>
              <button
                className="details-arrow left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                className="details-arrow right"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

        </div>


        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <span className="details-category">
            {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <p className="details-description">
            Discover the Elements Wellness product
            designed for your everyday wellness and
            personal care needs.
          </p>


          {/* IMAGE DOTS */}

          {images.length > 1 && (
            <div className="details-dots">

              {images.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === imageIndex
                      ? "details-dot active"
                      : "details-dot"
                  }
                  onClick={() =>
                    setImageIndex(index)
                  }
                  aria-label={`View image ${index + 1}`}
                />
              ))}

            </div>
          )}


          {/* ACTIONS */}

          <div className="details-actions">

            <button className="buy-button">
              Add to Cart
            </button>

            <button className="whatsapp-button">
              Order on WhatsApp
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;