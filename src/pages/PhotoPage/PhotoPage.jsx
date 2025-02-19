import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function PhotoPage() {
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=0b7ea1c0-7c37-4087-bfb3-dd00663da892`
    );
    setPhoto(data);
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=0b7ea1c0-7c37-4087-bfb3-dd00663da892`
    );
    setComments(data);
  }

  if (!photo || !comments) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        photo -- {id}
        <div>title: {photo.photoDescription}</div>
        <div>num comments: {comments.length}</div>
        <div>
          <Link to="/">back</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
