import "./Comment.scss";

function Comment({name,time,comment}) {
  return (
    <section className="comment__container">
      <div className="comment__item">
        <p className="comment__name">{name}</p>
        <p className="comment__date">{time}</p>
      </div>
      <p className="comment__text">{comment}</p>
    </section>
  );
}

export default Comment;
