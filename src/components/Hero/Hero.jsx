import "./Hero.scss";
import { BodyCopy, Title } from "../Typography/Typography";

function Hero() {
  return (
    <>
      <div className="hero">
        <p className="hero__title">
          <BodyCopy light>Our mission:</BodyCopy>
        </p>
        <p className="hero__paragraph">
          <Title>
            Provide photographers a space to share photos of the neighborhoods
            they cherish,{" "}
            <Title italic>
              <span>expressed in their unique style.</span>
            </Title>
          </Title>
        </p>
      </div>
    </>
  );
}

export default Hero;
