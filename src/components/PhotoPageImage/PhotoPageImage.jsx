import "./PhotoPageImage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BodyCopy } from "../Typography/Typography";
import { formatDate } from "../../utils/dateFormatter";

function PhotoPageImage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/photos/${id}`
      );
      setPhoto(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  const formattedPhotoDate = formatDate(photo.timestamp);

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
            <p className="photopage__date">{formattedPhotoDate}</p>
          </div>
        </div>
      </BodyCopy>
    </section>
  );
}

export default PhotoPageImage;
