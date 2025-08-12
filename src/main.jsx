import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { registerSW } from 'virtual:pwa-register';

// App 컴포넌트 렌더링
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 서비스워커 등록
registerSW({ immediate: true });
