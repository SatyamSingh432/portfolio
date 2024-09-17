/* eslint-disable react/no-unescaped-entities */
import Aboutimg from "../../assets/satyam.jpg";
import { GoFileSubmodule } from "react-icons/go";
import CV from "../../assets/satyamresume.pdf";
import Info from "./Info";
import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={Aboutimg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            <p style={{ paddingBottom: "10px" }}>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working
              on improving my chops one design problem at a time.
            </p>
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <GoFileSubmodule className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
