import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task from './pages/Task';
import AddNewTask from './pages/AddNewTask';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Task/>}/> 
        <Route path="/AddNewTask" element={<AddNewTask/>}/>
        <Route path="/Profile"element={<UserProfile/>}/> 
      </Routes>
    </Router>
  );
}

export default App;




