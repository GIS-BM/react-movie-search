import { useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSearch() {
    if (inputRef.current.value.trim()) {
      // null값과 공백일 경우 검색 기능 작동 안됨
      setTitle(inputRef.current.value);
      setType('');
      setPage(1);
      // 빈칸
    }
  }
  // function handleDefault() {
  //   if (inputRef.current.value === '') {
  //     // if 조건문 inputRef.current.value이 공백이라면 spiderman 검색
  //     setTitle('spiderman');
  //   }
  // }

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* onSubmit={(e) => e.preventDefault() 기본 이벤트 막기  */}
        {/* 이 경우에는 input 값 제출시 자동 새로고침 막기 */}
        <input
          type="search"
          placeholder="제목검색"
          title="제목검색"
          ref={inputRef}
          // onChange={handleDefault}
          // onChange : 입력 필드의 모든 값 변화를 감지하는 이벤트, onKeyUp으로 구현하면 마우스 오른클릭으로 검색창 문자열 지우면 기능 동작 안 함
          // onKeyUp={handleDefault}
          // 키를 눌렸다 떼는 이벤트(onKeyUp) 발생시 함수 setDefault 실행하도록 구현
          // onkeydown : 키를 눌렀을때 이벤트이다 (shift, alt, controll, capslock 등의 모든 키에 동작한다. 단 한영변환, 한자 등의 특수키는 인식 못한다).
          // onkeyup : 키를 눌렀다가 땠을 때 이벤트이다 (onkeydown 에서 인식하는 키들을 인식 한다).
          // onkeypress : 실제로 글자가 써질때 이벤트이다 (shift, tap, enter 등의 특수키는 인식 못한다).
        />
        {/* type = text와 search는 별차이 없다. */}
        <button type="submit" onClick={handleSearch}>
          검색
        </button>
        {/* 엔터키 입력시 제출이 자동으로 되려면 type="submit" 이여야 */}
      </form>
    </div>
  );
}
// form을사용하면 두가지 이점
// 엔터키 입력이 자동, 혹시 서버로 데이터를 보내야 할 때 action에 데이터 전송 가능
