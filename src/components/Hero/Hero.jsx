import "./Hero.scss";

function Hero() {
  return (
    <>
      <p className="hero__title">Our Mission:</p>
      <p className="hero__paragraph">
        Provide photographers a space to share photos of the neighborhoods they
        cherish, <span className= "hero__paragraph--italics">expressed in their unique style.</span> 
      </p>
    </>
  );
}

export default Hero;
