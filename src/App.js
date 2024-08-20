import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MyPage from './mypage/MyPage'; 
import UserProfile from './mypage/UserProfile'; 
import Chat from './mypage/Chat'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} /> 
        <Route path="/UserProfile" element={<UserProfile />} /> 
        <Route path="/Chat" element={<Chat />} /> 
      </Routes>
    </Router>
  );
}

export default App;
