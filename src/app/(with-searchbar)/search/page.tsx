import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  await delay();
  const { q } = await searchParams;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`);

  if (!response.ok) {
    return <div>데이터를 불러오는데 실패했습니다.</div>
  }

  const books: BookData[] = await response.json();



  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
