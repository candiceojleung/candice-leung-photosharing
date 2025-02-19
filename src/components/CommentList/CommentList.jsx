import "./CommentList.scss";
import Comment from "../Comment/Comment";
import axios from "axios";
import { useEffect, useState } from "react";

function CommentList({ id }) {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetchComments();
  }, []);

 
  async function fetchComments() {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=0b7ea1c0-7c37-4087-bfb3-dd00663da892`
      );
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!comments) {
    return <div>loading...</div>;
  }
  console.log(comments);

  return (
    <section className="comment-list">
      {comments.map((comment) => {
        return(
        <Comment
          key={comment.id}
          name={comment.name}
          time={new Date(comment.timestamp).toLocaleTimeString()}
          comment={comment.comment}
        />);
      })}
    </section>
  );
}

export default CommentList;
