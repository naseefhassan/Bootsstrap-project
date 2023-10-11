import React from "react";

function Header() {
  return (
    <>
      <div className="florist">
        <h5 className="fl">Florist</h5>
        <h5>Logo</h5>
      </div>

      <div className="navbar">
        <div className="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="nav-btn">
          <ul className="nav justify-content">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
               <span className="home"> Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Shop</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Protfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                <span>Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="cart">
          <svg
            className="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
         
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="p">Cart (1)</p>
        </div>
      </div>
    </>
  );
}

export default Header;
