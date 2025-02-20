import "./CommentList.scss";
import Comment from "../Comment/Comment";


function CommentList({ comments }) {
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
          time={new Date(comment.timestamp).toLocaleDateString()}
          comment={comment.comment}
        />);
      })}
    </section>
  );
}

export default CommentList;
