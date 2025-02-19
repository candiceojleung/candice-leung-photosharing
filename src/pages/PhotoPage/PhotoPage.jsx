import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PhotoPageImage from "../../components/PhotoPageImage/PhotoPageImage";
import PhotoPageForm from "../../components/PhotoPageForm/PhotoPageForm";
import CommentList from "../../components/CommentList/CommentList";
import PhotoPageHeader from "../../components/PhotoPageHeader/PhotoPageHeader";

export default function PhotoPage() {
  const { id } = useParams();

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
