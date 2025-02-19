import "./PhotoPageImage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PhotoPageImage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=0b7ea1c0-7c37-4087-bfb3-dd00663da892`
      );
      setPhoto(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!photo) {
    return <div>loading...</div>;
  }
  return (
    <section className="photopage__photo">
      <img
        src={photo.photo}
        alt={photo.photoDescription}
        className="photopage__image"
      />
      <div className="photopage__info">
        <div className="photopage__tags">
          {photo.tags.map((tag,index) =>(
            <span key={index} className="photopage__tag">
              {tag}
            </span>
          ))}
        </div>
        <p>
          <img
            src="../src/assets/images/Like_Outline.svg"
            alt="like-icon"
          ></img>
          {photo.likes} likes
        </p>
        <p>Photo by {photo.photographer}</p>
        <p>{new Date(photo.timestamp).toLocaleDateString()}</p>
      </div>
    </section>
  );
}

export default PhotoPageImage;
