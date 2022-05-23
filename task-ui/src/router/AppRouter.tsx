import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import TasksList from '../components/TasksList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
            <Routes>
                <Route path="/" element={<TasksList />}  />
                <Route  path="/add" element={<AddTask />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;