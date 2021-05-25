import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

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
  const [mode, setMode] = useState<boolean>(false);

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
    <View style={mode ? {backgroundColor: '#333', flex: 1} : {backgroundColor: '#fff'}}>
      <Header  mode={mode} setMode={setMode} />
      <TodoInput addTask={handleAddTask} mode={mode} />

      <MyTasksList
        mode={mode}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}