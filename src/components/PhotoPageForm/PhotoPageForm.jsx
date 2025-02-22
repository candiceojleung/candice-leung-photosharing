import "./PhotoPageForm.scss";
import { useState } from "react";
import axios from "axios";
import { BodyCopy } from "../Typography/Typography";

function PhotoPageForm({ id, fetchComments }) {
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const URL = `${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`;
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
    event.preventDefault();
    setSubmit(true);

    if (name.trim() === "" || comment.trim() === "") {
      return; // Prevent form submission if fields are empty
    }
    postComment();
  };

  async function postComment() {
    try {
      const commentObj = { name: name, comment: comment };
      const response = await axios.post(URL, commentObj);
      fetchComments();
      setName("");
      setComment("");
      setSubmit(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__info">
        <label>
          <p className="form__label">
            <BodyCopy>Name</BodyCopy>{" "}
          </p>
          <input
            type="text"
            name="name"
            onChange={handleName}
            value={name}
            className={`form__name ${
              submit && name.trim("") === "" ? "form__name--invalid" : ""
            }`}
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
