import "./PhotoPageForm.scss";
import { useState } from "react";
import axios from "axios";

function PhotoPageForm({ id, fetchComments }) {
  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "0b7ea1c0-7c37-4087-bfb3-dd00663da892";
  const URL = `${BASE_URL}/photos/${id}/comments?api_key=${API_KEY}`;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const isFieldFilled = () => {
    if (!name || !comment) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFieldFilled()) {
      postComment();
    }
  };

  async function postComment() {
    try {
      const commentObj = { name: name, comment: comment };
      const response = await axios.post(URL, commentObj);
      fetchComments();
      setName("");
      setComment("");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={handleName}
          value={name}
          className={`form__name ${
            isFieldFilled() ? "" : "form__name--invalid"
          }`}
        />
      </label>
      <label>
        Comment:{" "}
        <input
          type="text"
          name="comment"
          onChange={handleComment}
          value={comment}
          className={`form__comment ${
            isFieldFilled() ? "" : "form__comment--invalid"
          }`}
        />
      </label>
      <button
        className="form__button"
        type="submit"
        disabled={!isFieldFilled()}
      >
        Submit
      </button>
    </form>
  );
}

export default PhotoPageForm;
