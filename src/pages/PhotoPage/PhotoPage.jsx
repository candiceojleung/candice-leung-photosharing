import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PhotoPageImage from "../../components/PhotoPageImage/PhotoPageImage";
import PhotoPageForm from "../../components/PhotoPageForm/PhotoPageForm";
import CommentList from "../../components/CommentList/CommentList";
import PhotoPageHeader from "../../components/PhotoPageHeader/PhotoPageHeader";

export default function PhotoPage() {
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
    <>
      <PhotoPageHeader />
      <PhotoPageImage />
      <PhotoPageForm />
      <CommentList id={id} />
      <Footer />
    </>
  );
}
