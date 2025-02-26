import "./PhotoCardList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedFilter, isDrawerOpen }) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/photos`);
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!photos) {
    return <div>Loading...</div>;
  }

  const filteredPhotos = selectedFilter
    ? photos.filter((photo) => photo.tags.includes(selectedFilter))
    : photos; //if selected filter matches the photo tag, then display that photo, else show all photos

  return (
    <section className={`photocard-list ${isDrawerOpen ? "drawer-open" : " "}`}>
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
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
