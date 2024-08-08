import styles from './MovieList.module.css';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className={styles.movie_list}>
      {/* 데이터 없을 경우 undefined이므로 length가 실행되지않게하고
      없을 경우 영화데이터 없음을 표시 */}
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
      {/* 객체를 리턴할때는 소괄호로 묶어줘야 되는 sytax 규칙이 있다. */}
      {/* jsx {} 사용하면 리턴이 안됨 소괄호 사용 */}
    </div>
  );
}
