import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: Promise<{ q: string }> }): Promise<Metadata> {
  const { q } = await params;

  return {
    title: `${q} 검색`,
    description: "책 목록을 확인할 수 있습니다.",
    openGraph: {
      title: "책을 위한 서점",
      description: "책 목록을 확인할 수 있습니다.",
      images: [
        { url: "/thumbnail.png" },
      ],
    },
  }
}

async function SearchResult({ q }: { q: string }) {
  await delay();
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

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const { q = '' } = await searchParams;

  return <Suspense key={q} fallback={<BookListSkeleton count={3} />}><SearchResult q={q} /></Suspense>;
}
