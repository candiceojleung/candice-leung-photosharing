import "./Footer.scss";

function Footer() {
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
        <a className="social__platform" href="http://facebook.com">
          <img
            className="social__icon"
            src="../src/assets/images/Facebook.svg"
            alt="facebook"
          />
        </a>
        <a className="social__platform" href="http://x.com">
          <img
            className="social__icon"
            src="../src/assets/images/X_twitter.svg"
            alt="twitter"
          />
        </a>
        <a className="social__platform" href="http://instagram.com">
          <img
            className="social__icon"
            src="../src/assets/images/Instagram.svg"
            alt="instagram"
          />
        </a>
        <a className="social__platform" href="http://pinterest.com">
          <img
            className="social__icon"
            src="../src/assets/images/Pinterest.svg"
            alt="pintrest"
          />
        </a>
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
