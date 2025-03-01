import "./CommentList.scss";
import Comment from "../Comment/Comment";
import { BodyCopy } from "../Typography/Typography";
import { formatDate } from "../../utils/dateFormatter";

function CommentList({ comments }) {
  if (!comments) {
    return <div>Loading...</div>;
  }
  console.log(comments);

  const commentCount = comments.length;
  const commentText = commentCount === 1 ? "Comment" : "Comments"; //change "comments" to "comment" when there is only one

  return (
    <section className="comment-list">
      <div className="comment-list__length">
        <BodyCopy>
          {commentCount} {commentText}{" "}
        </BodyCopy>
      </div>
      {comments.map((comment) => {
        const formattedTime = formatDate(comment.timestamp);

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
