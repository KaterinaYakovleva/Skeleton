import styles from "./ProductDetails.module.css";

export function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className={styles.gallery}>
      <img src={images?.[0]} alt="Product" className={styles.mainImage} />
      <div className={styles.thumbnails}>
        {images?.map((img, i) => (
          <img key={i} src={img} className={styles.thumbnail} />
        ))}
      </div>
    </div>
  );
}
