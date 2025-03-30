'use client';

import { createReviewAction } from "@/app/actions/create-review.action";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";

export function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      window.alert(state.error)
      return;
    }
  }, [state]);

  return (
    <section>
      <form action={formAction} className={style.form_container}>
        <input type="hidden" name="bookId" value={bookId} readOnly={true} />
        <textarea disabled={isPending} required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input disabled={isPending} type="text" required name="author" defaultValue="익명" placeholder="작성자" />
          <button disabled={isPending} type="submit">{isPending ? "작성중..." : "작성하기"}</button>
        </div>
      </form>
    </section>
  );
}