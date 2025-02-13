import "./Footer.scss";

function Footer() {
  const SocialMedia = ({ href, icon, alt }) => (
    <a className="social__platform" href={href}>
      <img className="social__icon" src={icon} alt={alt} />
    </a>
  );

  const socialInfo = [
    {
      href: "http://facebook.com",
      icon: "../src/assets/images/Facebook.svg",
      alt: "facebook",
    },
    {
      href: "http://x.com",
      icon: "../src/assets/images/X_twitter.svg",
      alt: "twitter",
    },
    {
      href: "http://instagram.com",
      icon: "../src/assets/images/Instagram.svg",
      alt: "instagram",
    },
    {
      href: "http://pinterest.com",
      icon: "../src/assets/images/Pinterest.svg",
      alt: "pinterest",
    },
  ];

  return (
    <>
      <h1 className="footer__title">Snaps</h1>
      <div className="footer__learnmore">
        <ul className="footer__resources">
          <li className="footer__resource">For photographers</li>
          <li className="footer__resource">Hire talent</li>
          <li className="footer__resource">Inspiration</li>
        </ul>
        <ul className="footer__resources">
          <li className="footer__resource">About</li>
          <li className="footer__resource">Careers</li>
          <li className="footer__resource">Support</li>
        </ul>
      </div>
      <div className="social">
        {socialInfo.map((info, index) => (
          <SocialMedia key={index} {...info} />
        ))}
      </div>
      <div className="footer__copyright">
        <p className="footer__info">© 2024 Snaps</p>
        <p className="footer__info">Terms</p>
        <p className="footer__info">Privacy</p>
        <p className="footer__info">Cookies</p>
      </div>
    </>
  );
}

export default Footer;
