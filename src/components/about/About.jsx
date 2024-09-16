import Aboutimg from "../../assets/aboutimg.png";
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos hic
            magnam quibusdam omnis cum possimus a labore repellendus quos quae
            eveniet asperiores, accusamus alias suscipit exercitationem, id
            fugiat eaque atque!
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
