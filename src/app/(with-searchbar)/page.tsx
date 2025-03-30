import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "책을 위한 서점",
  description: "책 목록을 확인할 수 있습니다.",
  openGraph: {
    title: "책을 위한 서점",
    description: "책 목록을 확인할 수 있습니다.",
    images: [
      { url: "/thumbnail.png" },
    ],
  },
}

async function AllBooks() {
  await delay();
  const response = await fetch("http://localhost:12345/book", {
    next: {
      revalidate: 10,
    },
  });

  if (!response.ok) {
    return <div>데이터를 불러오는데 실패했습니다.</div>
  }

  const allBooks: BookData[] = await response.json();


  return (
    allBooks.map((book) => (
      <BookItem key={book.id} {...book} />
    ))
  );
}

async function RecoBooks() {
  await delay();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {
    next: {
      revalidate: 4,
    },
  });

  if (!response.ok) {
    return <div>데이터를 불러오는데 실패했습니다.</div>
  }

  const allBooks: BookData[] = await response.json();

  return (
    allBooks.map((book) => (
      <BookItem key={book.id} {...book} />
    ))
  );
}

const SuspenseBooks = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<BookListSkeleton count={3} />}>
      {children}
    </Suspense>
  )
}

export default async function Home() {

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <SuspenseBooks><RecoBooks /></SuspenseBooks>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <SuspenseBooks><AllBooks /></SuspenseBooks>
      </section>
    </div>
  );
}
