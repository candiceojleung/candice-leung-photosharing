import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedFilter, isDrawerOpen }) {
  const filteredPhotos = selectedFilter
    ? photos.filter((photo) => photo.tags.includes(selectedFilter))
    : photos;

  return (
    <section className={`photocard-list ${isDrawerOpen ? "drawer-open" : " "}`}>
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          url={photo.photo}
          alt={photo.photoDescription}
          photographer={photo.photographer}
          tags={photo.tags}
          isDrawerOpen={isDrawerOpen}
        />
      ))}
    </section>
  );
}

export default PhotoCardList;
