import React from "react";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  return (
    <section className="navbar">
      <article
        className="navbar__logo"
        onClick={() => {
          if (history.location.pathname !== "/") {
            history.push("/");
          }
        }}
      >
        <h2>star</h2>
        <h2>wars</h2>
      </article>
    </section>
  );
};

export default Navbar;
