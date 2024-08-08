import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={styles.movie_card}>
      <span>{movie.Year}</span>
      <div className={styles.img_wrap}>
        <img
          src={
            movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'
          }
          // 이미지 없을경우 기본이미지로 대체
          alt={movie.Title}
        />
      </div>
      <div className={styles.txt_wrap}>
        <span>{movie.Type}</span>
        <strong>{movie.Title}</strong>
      </div>
    </div>
  );
}
