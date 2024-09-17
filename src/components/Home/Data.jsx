/* eslint-disable react/no-unescaped-entities */
import { IoHandLeft } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Satyam Singh
        <IoHandLeft className="home__hand" style={{ color: "orange" }} />
      </h1>
      <h3 className="home__subtitle">FrontEnd Developer</h3>
      <p className="home__description">
        I'm an enthusiastic and motivated Front-End Developer, eager to apply my
        skills in creating engaging and responsive web interfaces.
      </p>
      <a href="#contact" className="button button--flex">
        {"Say Hello "}
        <IoIosSend
          className="button__icon"
          style={{ color: "hsl(0, 0%, 98%)" }}
        />
      </a>
    </div>
  );
};
export default Data;
