import "./PhotoPageHeader.scss";
import { Wordmark } from "../Typography/Typography";
import { Heading } from "../Typography/Typography";
import { Link } from "react-router-dom";

function PhotoPageHeader() {
  return (
    <header className="photopage-header">
      <Link to={`/`}>
        <Wordmark>Snaps</Wordmark>
      </Link>
      <Link to={`/`}>
        <div className="photopage-header__home">
          <img
            className="photopage-header__img"
            src="../src/assets/images/Arrow.svg"
            alt="arrow-icon"
          ></img>
          <Heading>
            <p>Home</p>
          </Heading>
        </div>
      </Link>
    </header>
  );
}

export default PhotoPageHeader;
