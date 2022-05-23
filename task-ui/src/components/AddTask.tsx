import React from 'react';
import { apiService } from '../services/apiServices';
import TaskForm from './TaskForm';

const AddTask = () => {
  const handleOnSubmit = (task: any) => {
    try{
      debugger;
      const data = apiService.addNewTask(task);
    }catch(err){

    }
    
    
  };

  return (
    <React.Fragment>
      <TaskForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTask;