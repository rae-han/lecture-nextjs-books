import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDelete from "./review-item-delete";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div>{new Date(createdAt).toLocaleDateString()}</div>
        <ReviewItemDelete reviewId={id} bookId={bookId} />
      </div>
    </div>
  );
}