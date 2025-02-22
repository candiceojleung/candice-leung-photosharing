import "./CommentList.scss";
import Comment from "../Comment/Comment";
import { BodyCopy } from "../Typography/Typography";

function CommentList({ comments }) {
  if (!comments) {
    return <div>loading...</div>;
  }
  console.log(comments);

  const commentCount = comments.length;
  const commentText = commentCount === 1 ? "Comment" : "Comments";

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return (
    <section className="comment-list">
      <div className="comment-list__length">
        <BodyCopy>
          {commentCount} {commentText}{" "}
        </BodyCopy>
      </div>
      {comments.map((comment) => {
        const formattedTime = new Date(comment.timestamp).toLocaleDateString(
          "en-US",
          options
        );

        return (
          <Comment
            key={comment.id}
            name={comment.name}
            time={formattedTime}
            comment={comment.comment}
          />
        );
      })}
    </section>
  );
}

export default CommentList;
