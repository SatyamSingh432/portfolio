import { IoHandLeft } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Satyam Singh
        <IoHandLeft className="home__hand" style={{ color: "orange" }} />
      </h1>
      <h3 className="home__subtitle">Software Developer</h3>
      <p className="home__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
        voluptatem deserunt. Facilis atque accusamus dolore enim dolores odit
        quo amet.
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
