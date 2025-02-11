import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList() {
  return (
    <section className="photocard__list">
      {photos.map((photo) => {
        return (
          <PhotoCard
            url={photo.photo}
            alt={photo.photoDescription}
            photographer={photo.photographer}
            key={photo.id}
          />
        );
      })}
    </section>
  );
}

export default PhotoCardList;
