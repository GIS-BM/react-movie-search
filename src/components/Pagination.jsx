import { sliceArrayByLimit } from '../lib/util';
import { useState, useEffect, useMemo } from 'react';
import styles from './Pagination.module.css';

export default function Pagination({ totalPage, limit, setPage, page }) {
  const [currentPageArr, setCurrentPageArr] = useState([]);
  // 배열형태로 상태변수 값 초기화
  const [totalPageArr, setTotalPageArr] = useState([]);
  // 상태변수 값 배열로 초기화

  // 페이지번호 변경시 totalPageArr에서 이전, 다음 배열로 현재페이지 배열 변경
  useEffect(() => {
    if (page % limit === 1) {
      // 페이지번호 1이면 totalPageArr[0]로 이동, 4이면 totalPageArr[1] 이동
      setCurrentPageArr(totalPageArr[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      // 페이지 번호 3이면 totalPageArr[0]로 이동, 4이면 totalPageArr[1]
      setCurrentPageArr(totalPageArr[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  // 렌더링과 상관없이 totalPage가 변경되면 실행되도록 해야한다. useMemo 사용
  // useMemo는 totalpage 값이 바뀔 때만 실행
  // useEffect는 렌더링 후에 실행된다.
  useMemo(() => {
    const pageGroup = sliceArrayByLimit(totalPage, limit);
    setTotalPageArr(pageGroup);
    setCurrentPageArr(pageGroup[0]);
  }, [totalPage]);
  // api 화g
  // 토탈 페이지 상태가 바뀔때마다 새로 실행되어야 useEffect 사용
  // totalPage는 외부 시스템이고 totalPage가 바뀔때마다 새로 만든다.

  // page랑 num 비교해서 map 다시 돌린다.
  return (
    <div className={styles.Pagination}>
      {/* currentPageArr이 안 만들어질수있다. 데이터가 늦게 들어오면 */}
      {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}
      {currentPageArr?.map((num) => (
        <button
          type="button"
          key={num}
          onClick={() => setPage(num + 1)}
          // className={styles.num_btn}
          className={`${styles.num_btn} ${
            page === num + 1 ? styles.active : ''
          }`}
        >
          {num + 1}
        </button>
      ))}
      {page !== totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
