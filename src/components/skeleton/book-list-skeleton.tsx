import BookItemSkeleton from "./book-item-skeleton"

const BookListSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <BookItemSkeleton key={index} />
      ))}
    </>
  )
}

export default BookListSkeleton;