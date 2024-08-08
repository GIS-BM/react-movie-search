// Add 버튼 클릭 이벤트시 호출될 addItem 함수 선언
// 함수 실행 시 item 하나가 추가되어야 한다.
import { useState } from 'react';

export function addItem({ id, contents, done, setId }) {
  console.log('addItem 함수 호출 성공!');

  // 리렌더링과 무관하게 값이 저장되어야 하나
  // 값이 변경되면 리렌더링이 유발되지 않아야할때 useEffect() 훅함수를 사용한다.
  // 그러나 여기서는 값이 변경되면 리렌더링이 일어나야 하므로 useEffect() 훅함수는 사용하지 않는다.
}
