import BookPage from '@/app/book/[id]/page'
import Modal from '@/components/modal'

export default function InterceptBookPage(props: any) {
  return (
    <div>
      <h1>InterceptBookPage</h1>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  )
}