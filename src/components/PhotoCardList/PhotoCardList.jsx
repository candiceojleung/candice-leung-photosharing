import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedFilter }) {
const filteredPhotos = selectedFilter
? photos.filter((photo) => photo.tags.includes(selectedFilter))
: photos;

  return (
    <section className="photocard-list">
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          url={photo.photo}
          alt={photo.photoDescription}
          photographer={photo.photographer}
          tags={photo.tags}
        />
      ))}
    </section>
  );
}

export default PhotoCardList;
