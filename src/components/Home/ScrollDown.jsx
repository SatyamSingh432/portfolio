import { FaArrowDown } from "react-icons/fa6";
const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="" className="home__scroll-button button--flex">
        <div className="mouse"></div>
        <div>
          <span className="home__scroll-name">Scroll Down</span>
          <FaArrowDown className="home__scroll-arrow" />
        </div>
      </a>
    </div>
  );
};
export default ScrollDown;
