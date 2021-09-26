import "./header.css";
import imgthree from "./images/p3.jpg";
import imgtwo from "./images/p2.jpg";
import imgfive from "./images/p5.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img-section">
        <img className="headerimg" src={imgthree} alt="blog images" />
        <img className="headerimg" src={imgfive} alt="blog images" />
        <img className="headerimg" src={imgtwo} alt="blog images" />
      </div>

      <div className="header-button">
        <button>Publish Your First Article</button>
      </div>
      <div className="headerbackcolor"></div>
    </div>
  );
};

export default Header;
