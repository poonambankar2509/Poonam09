import React, { useState } from "react";
import "./Home.css";

import heroImage from "../assets/hero.png";

import healthDrinks from "../assets/health-drinks.png";
import personalCare from "../assets/personalcare.png";
import nutrition from "../assets/nutrition.png";
import hairCare from "../assets/haircare.png";
import skinCare from "../assets/skincare.png";

import products from "../data/products.json";
import ProductDetails from "./ProductDetails";

/* =========================================
   CATEGORY DATA
========================================= */

const categories = [
  {
    title: "Health Drinks",
    description:
      "Premium wellness drinks made with natural ingredients.",
    image: healthDrinks,
  },

  {
    title: "Personal Care",
    description:
      "Herbal skincare and self-care essentials.",
    image: personalCare,
  },

  {
    title: "Nutrition",
    description:
      "Daily nutrition supplements for every family.",
    image: nutrition,
  },

  {
    title: "Hair Care",
    description:
      "Natural care for stronger, healthier-looking hair.",
    image: hairCare,
  },

  {
    title: "Skin Care",
    description:
      "Gentle skincare powered by nature.",
    image: skinCare,
  },
];

/* =========================================
   HOME
========================================= */

function Home() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  /* =========================================
     PRODUCT CATEGORIES
  ========================================= */

  const productCategories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  /* =========================================
     FILTER PRODUCTS
  ========================================= */

  const filteredProducts =
    products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        categoryMatch &&
        searchMatch
      );
    });

  /* =========================================
     SCROLL TO PRODUCTS
  ========================================= */

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* =========================================
     CATEGORY CLICK
  ========================================= */

  const openCategory = (categoryName) => {
    const matchingCategory =
      productCategories.find(
        (category) =>
          category
            .toLowerCase()
            .includes(
              categoryName
                .toLowerCase()
                .split(" ")[0]
            )
      );

    setActiveCategory(
      matchingCategory || "All"
    );

    setTimeout(() => {
      scrollToProducts();
    }, 50);
  };

  /* =========================================
     PRODUCT DETAILS
  ========================================= */

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() =>
          setSelectedProduct(null)
        }
      />
    );
  }

  /* =========================================
     PAGE
  ========================================= */

  return (
    <main className="home">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small-title">
            ELEMENTS WELLNESS
          </p>

          <h1>
            Trusted Wellness
            <br />
            for <span>Every Home</span>
          </h1>

          <p className="hero-description">
            Combining nature and science to create
            premium Ayurvedic wellness products
            for healthier living.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => {
                setActiveCategory("All");
                scrollToProducts();
              }}
            >
              Shop Now
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                setActiveCategory("All");
                scrollToProducts();
              }}
            >
              Explore Products
            </button>

          </div>

        </div>

        {/* HERO IMAGE */}

        <div className="hero-image-wrapper">

          <img
            src={heroImage}
            alt="Elements Wellness Products"
            className="hero-image"
          />

        </div>

      </section>


      {/* =====================================
          CATEGORY CARDS
      ===================================== */}

      <section className="categories-section">

        <div className="categories-container">

          {categories.map(
            (category) => (

              <article
                className="category-card"
                key={category.title}
              >

                {/* TEXT */}

                <div className="category-content">

                  <h2>
                    {category.title}
                  </h2>

                  <p>
                    {category.description}
                  </p>

                  <button
                    className="explore-btn"
                    onClick={() =>
                      openCategory(
                        category.title
                      )
                    }
                  >
                    Explore
                    <span>→</span>
                  </button>

                </div>


                {/* IMAGE */}

                <div className="category-image-wrapper">

                  <img
                    src={category.image}
                    alt={category.title}
                    className="category-image"
                  />

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================
          PRODUCTS
      ===================================== */}

      <section
        id="products"
        className="products-section"
      >

        {/* HEADING */}

        <div className="products-heading">

          <p>
            ELEMENTS COLLECTION
          </p>

          <h2>
            {activeCategory === "All"
              ? "All Products"
              : activeCategory}
          </h2>

        </div>


        {/* SEARCH */}

        <div className="product-search">

          <input
            type="text"
            placeholder="Search Elements products..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />

        </div>


        {/* FILTER BUTTONS */}

        <div className="product-filters">

          {productCategories.map(
            (category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "product-filter active"
                    : "product-filter"
                }
                onClick={() =>
                  setActiveCategory(
                    category
                  )
                }
              >
                {category === "All"
                  ? "All Products"
                  : category}
              </button>

            )
          )}

        </div>


        {/* PRODUCT GRID */}

        <div className="products-grid">

          {filteredProducts.map(
            (product) => (

              <article
                className="product-item"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="product-item-image">

                  {product.images &&
                  product.images.length > 0 ? (

                    <img
                      src={
                        product.images[0]
                      }
                      alt={
                        product.name
                      }
                      loading="lazy"
                    />

                  ) : (

                    <div className="product-placeholder">
                      ELEMENTS
                    </div>

                  )}

                </div>


                {/* PRODUCT INFO */}

                <div className="product-item-info">

                  <span>
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <button
                    onClick={() =>
                      setSelectedProduct(
                        product
                      )
                    }
                  >
                    View Product
                  </button>

                </div>

              </article>

            )
          )}

        </div>


        {/* NO PRODUCTS */}

        {filteredProducts.length === 0 && (

          <div className="no-products">

            <h3>
              No products found
            </h3>

            <p>
              Try another product name
              or category.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Home;