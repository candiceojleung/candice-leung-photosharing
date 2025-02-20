import "./PhotoCardList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedFilter, isDrawerOpen }) {
  const [photos, setPhotos] = useState(null);
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const url = `${BASE_URL}/photos?api_key=${API_KEY}`;

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      const { data } = await axios.get(url);
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
    : photos;

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
