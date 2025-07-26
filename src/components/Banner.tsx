import { FaBullseye, FaRegClock, FaRegLightbulb } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="banner">
        <div className="banner-grid container">
          <div className="banner-item">
            <FaRegLightbulb className="icon-banner"/>
            <h3>Elkin David Bohorquez Funez</h3>
          </div>
          <div className="banner-item">
            <FaBullseye className="icon-banner"/>
            <h3>IS-513 Lenguajes de Programacion</h3>
          </div>
          <div className="banner-item">
            <FaRegClock className="icon-banner"/>
            <h3>26 de Julio de 2025</h3>
          </div>
        </div>
      </section>
    );
};

export default Banner;