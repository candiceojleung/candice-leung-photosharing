import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedFilter }) {
  const filteredPhotos = photos.filter((photo) => 
    !selectedFilter 
      ? true 
      : photo.tags.some((tag) => selectedFilter.includes(tag))
  );

  return (
    <section className="photocard-list">
      {filteredPhotos.map((photo) => {
        return (
          <PhotoCard
            url={photo.photo}
            alt={photo.photoDescription}
            photographer={photo.photographer}
            tags={photo.tags}
            key={photo.id}
          />
        );
      })}
    </section>
  );
}

export default PhotoCardList;
