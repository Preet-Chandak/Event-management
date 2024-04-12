import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  React.useEffect(() => {
  }, []);
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>FLARE</h3>
        <div>
          <h1>BEYONG THE VERGE</h1>
          <p>
            Annual Socio-Cultural Mega-Fest of Pandit Deendayal Energy University Gandhinagar!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
