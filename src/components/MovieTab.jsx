import styles from './MovieTab.module.css';

const types = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieTab({ type, setType, setPage }) {
  function handleType(e) {
    // 버튼 클릭 이벤트 발생시 동작 구현
    // console.log('changeType함수 동작');
    // console.log(e.target.innerText);
    // 태그 안의 내용을 가져오려면 innerText로 가져오면 된다.
    setType(e.target.innerText);
    // 해당요소를 e.target으로 선택하고 데이터를 가져올 수 있다.

    if (e.target.innerText !== 'All') {
      setType(e.target.innerText);
      setPage(1);
    } else {
      setType('');
      // 백엔드에서 지정한 문법(규칙) ''이면 모든 타입 보여줘라
      // 타입이 초기값 ''이 들어오면 모든 타입을 의미한다.
      setPage(1);
    }

    // 클릭하면 active 구현
    if (type === e.target.innerText) {
      console.log('탭메뉴 클릭 테스트 : ' + e.target.innerText);
    } else if ('All' === e.target.innerText) {
      console.log('탭메뉴 클릭 테스트 : ' + e.target.innerText);
    }
  }

  return (
    <div className={styles.movie_tab}>
      {/* <button></button> */}
      {/* 탭 누르면 타입이 바뀌어 주는거지 a태그가 아니다. */}
      {/* 버튼으로 봐야 한다. */}
      {/* {types.map((item) => (
        <button type="button" key={item}>
          {item}
        </button>
      ))} */}
      {types.map((item) => (
        // <button type="button" key={item} onClick={() => setType(item)}>
        <button
          type="button"
          key={item}
          onClick={handleType}
          // className={styles.active}
          // className={type === item && styles.active}
          // className={item === type || item === 'All' ? styles.active : ''}
          // 타입이 공백일때 조건이 active가 실행되어야 한다.
          // 혹은 item이 'All'이면 active가 실행되어야 한다.
          // className={item === type || type === '' ? styles.active : ''}
          // type === '' 이면 전체가 다 선택된다.
          // className={item === type || item === 'All' ? styles.active : ''}
          // item === 'All"이면 All이 계속 선택된 상태다.
          className={type === (item === 'All' ? '' : item) ? styles.active : ''}
          // type = '' , item === 'All' 이여서 조건 성립 안됨.
          // 삼항을 한번 더 쓸수 있다. item이 'All'이면 빈칸으로 바꿔준다. || 사용불가
        >
          {item}
        </button>
      ))}
      {/* 단순히 버튼을 만드는 map */}
    </div>
  );
}
