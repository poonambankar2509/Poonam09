import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <header className="navbar">

      {/* LEFT — LOGO + ELEMENTS */}
      <a href="/" className="navbar-brand">
        <img
          src={logo}
          alt="Elements Wellness"
        />

        <span>ELEMENTS</span>
      </a>


      {/* CENTER — MENU */}
      <nav className="navbar-menu">

        <a href="/">Home</a>

        <a href="/products">
          Products
        </a>

        <a href="/categories">
          Categories
        </a>

        <a href="/about">
          About
        </a>

        <a href="/contact">
          Contact
        </a>

      </nav>


      {/* RIGHT — ACTIONS */}
      <div className="navbar-actions">

        {/* SEARCH */}
        <button
          className="nav-action"
          aria-label="Search"
        >
          <svg viewBox="0 0 24 24">
            <circle
              cx="11"
              cy="11"
              r="7"
            />
            <path d="M20 20l-4-4" />
          </svg>
        </button>


        {/* ACCOUNT */}
        <button
          className="nav-action"
          aria-label="Account"
        >
          <svg viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="7"
              r="4"
            />
            <path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" />
          </svg>
        </button>


        {/* CART */}
        <button
          className="nav-action cart-action"
          aria-label="Cart"
        >
          <svg viewBox="0 0 24 24">
            <path d="M3 4h2l2.2 11h9.8l3-8H6" />
            <circle
              cx="10"
              cy="20"
              r="1.5"
            />
            <circle
              cx="18"
              cy="20"
              r="1.5"
            />
          </svg>

          <span className="cart-count">
            0
          </span>
        </button>

      </div>

    </header>
  );
}

export default NavBar;