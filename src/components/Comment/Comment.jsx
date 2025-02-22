import "./Comment.scss";
import {
  SmallBodyCopy,
  BodyCopy,
} from "../../components/Typography/Typography";

function Comment({ name, time, comment }) {
  return (
    <section className="comment__container">
      <div className="comment__item">
        <p className="comment__name">
          <SmallBodyCopy>{name}</SmallBodyCopy>
        </p>
        <p className="comment__date">
          <SmallBodyCopy>{time}</SmallBodyCopy>
        </p>
      </div>
      <p className="comment__text">
        <BodyCopy>{comment}</BodyCopy>
      </p>
    </section>
  );
}

export default Comment;
