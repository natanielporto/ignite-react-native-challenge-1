import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === '') {
      return;
    }
    
    const newTask: Task = {
      id: tasks.length,
      title: newTaskTitle,
      done: false,
    }

    const newTasks: Task[] = [...tasks, newTask]

    return setTasks(newTasks)
  }

  function handleMarkTaskAsDone(id: number) {
    const setDone = tasks.map(el => {
      if(el.id === id) {
        el.done = !el.done
        return el
      }
      return el
    })

     return setTasks(setDone)
  }

  function handleRemoveTask(id: number) {
    return setTasks(tasks.filter(el => el.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}