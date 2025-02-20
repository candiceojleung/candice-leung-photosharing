import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import PhotoPageImage from "../../components/PhotoPageImage/PhotoPageImage";
import PhotoPageForm from "../../components/PhotoPageForm/PhotoPageForm";
import CommentList from "../../components/CommentList/CommentList";
import PhotoPageHeader from "../../components/PhotoPageHeader/PhotoPageHeader";

export default function PhotoPage() {
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const URL = `${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`;

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const { data } = await axios.get(URL);
      const sortedData = data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setComments(sortedData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <PhotoPageHeader />
      <PhotoPageImage />
      <PhotoPageForm id={id} fetchComments={fetchComments} />
      <CommentList comments={comments} />
      <Footer />
    </>
  );
}
