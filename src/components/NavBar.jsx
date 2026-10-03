import logo from "../assets/logo.png";
import { NAV_LINKS } from "../assets/constant";

const NavBar = () => {
  return (
    <header
      style={{
        width: "100%",
        background: "#FAF8F3",
        borderBottom: "1px solid #E8E1D5",
        padding: "15px 40px",
        boxSizing: "border-box",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <a href="/">
          <img
            src={logo}
            alt="Elements Wellness"
            style={{
              width: "150px",
              height: "auto",
              display: "block",
            }}
          />
        </a>

        {/* NAV LINKS */}
        <ul
          style={{
            display: "flex",
            gap: "35px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SEARCH + CART */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button type="button">🔍</button>
          <button type="button">🛒</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
