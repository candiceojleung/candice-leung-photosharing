import "./PhotoPage.scss";
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

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/photos/${id}/comments`);
      const sortedData = data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp) //sort comments based on date posted, showing most recent at top
      );
      setComments(sortedData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <PhotoPageHeader />
      <div className="secondary-page">
        <PhotoPageImage />
        <PhotoPageForm id={id} fetchComments={fetchComments} />
        <CommentList comments={comments} />
      </div>
      <Footer />
    </>
  );
}
