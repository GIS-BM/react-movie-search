import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// 이름을 바꿀 수 있다. import [이름] from [jsx 파일 경로]
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // useEffect훅을 제대로 사용했는지 테스트하기 위해서 두번 실행
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
