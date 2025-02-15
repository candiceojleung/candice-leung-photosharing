import "./Footer.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Wordmark, BodyCopy } from "../Typography/Typography";

function Footer() {
  const resourceInfo = [
    [
      { text: "For photographers", href: "#" },
      { text: "Hire talent", href: "#" },
      { text: "Inspiration", href: "#" },
    ],
    [
      { text: "About", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Support", href: "#" },
    ],
  ];

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

  const footerInfo = ["© 2024 Snaps", "Terms", "Privacy", "Cookies"];

  return (
    <div className="footer">
      <div className="footer__desktop">
        <div className="footer__tablet">
            <Wordmark className="footer__title">Snaps</Wordmark>
          <BodyCopy>
            <div className="footer__learnmore">
              {resourceInfo.map((learnmore, learnmoreIndex) => (
                <ul key={learnmoreIndex} className="footer__resources">
                  {learnmore.map((resource, resourceIndex) => (
                    <li key={resourceIndex} className="footer__resource">
                      <a href={resource.href}>{resource.text}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </BodyCopy>
        </div>
        <div className="footer__social">
          {socialInfo.map((info, index) => (
            <SocialMedia key={index} {...info} />
          ))}
        </div>
      </div>
      <BodyCopy>
        <div className="footer__copyright">
          {footerInfo.map((text, index) => (
            <p key={index} className="footer__info">
              {text}
            </p>
          ))}
        </div>
      </BodyCopy>
    </div>
  );
}

export default Footer;
