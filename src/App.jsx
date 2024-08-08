import { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieTab from './components/MovieTab';
import { sliceArrayByLimit } from './lib/util';
import Pagination from './components/Pagination';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=321adeb';
// API_URL은 변할일이 없다. 상수형변수로 선언
// 환경 설정, 초기화 관련은 대문자 스네이크 표기법으로 상수형변수명을 작성한다.
// API 엔드포인트

export default function App() {
  const [movies, setMovies] = useState([]);
  // 상태변수 배열로 초기화 해야함, null이라도 초기값을 넣을것
  const [title, setTitle] = useState('BBC');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // console.log(sliceArrayByLimit(100, 10));

  useEffect(() => {
    async function searchMovie() {
      // async : 비동기 동작을 동기적으로 실행되게 한다. [???]
      // async는 내부에 promise를 리턴하는 함수가 존재해야지 사용가능
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      // url 뒤의 문자열 쿼리 스트링, option : s가 search의 약자 s에서 {title} 값만 바꾸어준다.
      // fetch 메서드 : 데이터를 가져온다. 비동기로 동작하는 함수, 절차적으로 작동하지 않는다.
      const data = await response.json();
      // await 키워드를 통해서 기다려주게 한다.
      // 백엔드에서는 java객체를 json으로 바꿔주는 메서드
      // 프론트에서는 json 객체를 js로 바꿔주는 메서드
      console.log(data.Search);
      // 데이터 다 받아오는거 기다림
      // 쿼리 스트링
      // console.log(data.Search);
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      // sort의 리턴값이 -1이면 내림차순, 1이면 오름차순
      // 데이터가 안들어올수도있다. undefined 뜬다. ? 쓰면 undefined혹은 null인 경우에는
      // 뒤의 메서드는 실행을 멈춘다.
      // 년도기준 내림차순 정렬로 영화목록 표시되게
      // a : 배열의 이전 요소 , b : 배열의 다음요소
      // sort((a, b) => (a.Year > b.Year ? -1 : 1) 내림차순 정렬이라고 이미 문법적으로 정의되어 있다.
      // sort((a, b) => (a.Year > b.Year ? 1 : -1) 오름차순 정렬이라고 이미 문법적으로 정의되어 있다.
      // ?(optional property) : 검색을 했는데 데이터가 아무것도 안들어올 수 있다.
      // data.Search 결과값이 undefined null 이럴수 있다.
      // 속성명? 붙이면 undefined, null인 경우 뒤의 메서드를 실행 안 함
      setMovies(sortData);

      setTotalPage(Math.ceil(data.totalResults / 10));
      console.log(Math.ceil(data.totalResults / 10));
      // Math.ceil : 올림 처리
    }
    searchMovie();
  }, [title, type, page]);
  // 데이터를 한번만 가져오면 되니까 useEffect 사용, 배열 사용
  // 타이틀이 변경되면 useEffect 전체가 다시 실행되야 한다. 배열에 넣는다.
  // [title]이 변경되면 useEffect가 다시 실행, 의존성배열에 넣은 값이 변경되면 useEffect가 다시 실행
  // [type]이 변경되면 useEffect가 다시 실행된다.

  return (
    <div className="app">
      <h2>MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab
        type={type}
        setType={setType}
        movies={movies}
        setPage={setPage}
      />
      <MovieList movies={movies} />
      {movies && (
        <Pagination
          totalPage={totalPage}
          setTotalPage={setTotalPage}
          limit={3}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
}
