import "./PhotoPageForm.scss";
import { useState } from "react";
import axios from "axios";
import { BodyCopy } from "../Typography/Typography";

function PhotoPageForm({ id, fetchComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      setSubmit(true);
      if (name.trim() === "" || comment.trim() === "") {
        setTimeout(() => {
          alert(
            "Name and comment fields are required and neither can be empty"
          );
        }, 5);
        return;
      }
      postComment();
    } catch (error) {
      console.log(error);
    }
  };

  async function postComment() {
    try {
      const commentObj = { name: name, comment: comment };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/photos/${id}/comments`,
        commentObj
      );
      fetchComments(); //fetch comments again with new comment
      setName(""); //reset name field
      setComment(""); //reset comment field
      setSubmit(false); //set submisison to default again
      return response; //show new comment
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__info">
        <label>
          <p className="form__label">
            <BodyCopy>Name</BodyCopy>
          </p>
          <input
            type="text"
            name="name"
            onChange={handleName}
            value={name}
            className={`form__name ${
              submit && name.trim("") === "" ? "form__name--invalid" : ""
            }`} //create invalid modifier to add red border for form validation
          />
        </label>
        <label className="form__label">
          <p className="form__label">
            <BodyCopy>Comment</BodyCopy>
          </p>
          <textarea
            type="text"
            name="comment"
            onChange={handleComment}
            value={comment}
            className={`form__comment ${
              submit && comment.trim("") === "" ? "form__comment--invalid" : ""
            }`}
          />
        </label>
      </div>
      <div className="form__submit">
        <button className="form__button" type="submit">
          <BodyCopy>Submit</BodyCopy>
        </button>
      </div>
    </form>
  );
}

export default PhotoPageForm;
