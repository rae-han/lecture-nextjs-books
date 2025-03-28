import styles from './book-item-skeleton.module.css';

const BookItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover_img} />
      <div className={styles.info_container}>
        <div className={styles.title} > </div>
        <div className={styles.subtitle} />
        <br />
        <div className={styles.author} />
      </div>
    </div>
  )
}

export default BookItemSkeleton;