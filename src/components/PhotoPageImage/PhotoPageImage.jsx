import "./PhotoPageImage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BodyCopy } from "../Typography/Typography";

function PhotoPageImage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const url = `${BASE_URL}/photos/${id}?api_key=${API_KEY}`; //fetch individual photo api key

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    try {
      const { data } = await axios.get(url);
      setPhoto(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = new Date(photo.timestamp).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <section className="photopage">
      <img
        src={photo.photo}
        alt={photo.photoDescription}
        className="photopage__photo"
      />
      <BodyCopy>
        <div className="photopage__info">
          <div className="photopage__tags">
            {photo.tags.map((tag, index) => (
              <span key={index} className="photopage__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="photopage__container">
            <div className="photopage__wrapper">
              <p className="photopage__like">
                <img
                  src="../src/assets/images/Like_Outline.svg"
                  alt="like-icon"
                  className="photopage__icon"
                ></img>
                {photo.likes} likes
              </p>
              <p className="photopage__author">Photo by {photo.photographer}</p>
            </div>
            <p className="photopage__date">{formattedDate}</p>
          </div>
        </div>
      </BodyCopy>
    </section>
  );
}

export default PhotoPageImage;
