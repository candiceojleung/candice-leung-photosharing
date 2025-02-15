import "./Hero.scss";
import { BodyCopy, Title } from "../Typography/Typography";

function Hero() {
  return (
    <>
      <div className="hero">
        <p className="hero__title">
          <BodyCopy light>Our Mission:</BodyCopy>
        </p>
        <h2 className="hero__paragraph">
          <Title> Provide photographers a space to share photos of the neighborhoods
          they cherish,<span>expressed in their unique style.</span></Title>
          
        </h2>
      </div>
    </>
  );
}

export default Hero;
