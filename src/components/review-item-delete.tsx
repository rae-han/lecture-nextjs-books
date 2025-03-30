'use client';
import { deleteReviewAction } from "@/app/actions/delete-review.action";
import style from "./review-item.module.css";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

export default function ReviewItemDelete({ reviewId, bookId }: { reviewId: number, bookId: number }) {
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);
  const formRef = useRef<HTMLFormElement>(null);
  const { action, data, method, pending } = useFormStatus();

  useEffect(() => {
    if (state && !state.status) {
      window.alert(state.error);
      return;
    }
  }, [state]);

  console.log(1111, { action, data, method, pending })

  return (
    <form ref={formRef} action={formAction}>
      <input type="hidden" name="reviewId" value={reviewId} readOnly={true} />
      <input hidden name="bookId" value={bookId} readOnly={true} />
      {isPending ? (
        <div className={style.delete_btn}>삭제중...</div>
      ) : (
        <div className={style.delete_btn} onClick={() => {
          formRef.current?.requestSubmit();
        }}>삭제하기</div>
      )}
    </form>
  )
}