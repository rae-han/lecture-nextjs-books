import { createReviewAction } from "@/app/actions/create-review.action";
import style from "./review-editor.module.css";

export async function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction} className={style.form_container}>
        <input type="hidden" name="bookId" value={bookId} readOnly={true} />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input type="text" required name="author" defaultValue="익명" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}