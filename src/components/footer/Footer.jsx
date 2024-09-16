import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="home__social-icon"
            target="_blank"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            className="home__social-icon"
            target="_blank"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            className="home__social-icon"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
