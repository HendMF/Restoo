import { React, useState } from "react";
import "./NavBar.css";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

function NavBar() {
  const items = [
    { name: "home", id: 1 },
    { name: "speciality", id: 2 },
    { name: "popular", id: 3 },
    { name: "gallery", id: 4 },
    { name: "reviews", id: 5 },
    { name: "order", id: 6 },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  return (
    <header className="header">
      <Link to="/home" className="logo">
        <i>
          <GiForkKnifeSpoon />
        </i>
        RESTO
      </Link>
      <div id="menu-bar" onClick={() => setIsOpen(!isOpen)}>
        <HiMenu />
      </div>
      <nav className={`navbar ${isOpen ? "active" : ""} `}>
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/${item.name}`}
              onClick={() => setIsRemoved(!isRemoved)}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default NavBar;
