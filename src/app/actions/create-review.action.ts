"use server"

import delay from "@/util/delay";
import { revalidatePath, revalidateTag } from "next/cache";

export async function createReviewAction(_: unknown, formData: FormData) {
  await delay();
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "모든 필드를 입력해주세요.",
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: "POST",
      body: JSON.stringify({ bookId, content, author }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    revalidateTag(`reviews-${bookId}`);

    return {
      status: true,
      error: null
    }
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 작성에 실패했습니다. ${err}`,
    };
  }
}