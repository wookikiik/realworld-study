import { useState } from 'react';
import DUMMY_TASK_LIST from '../../../data/todo';
import { Task, UpdateTaskParams } from '../../../types/task';

const initialTaskList: Task[] = DUMMY_TASK_LIST;

/**
 * Tasks 상태 관리 hook
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState(initialTaskList);

  /**
   * Add NEW task
   *
   * @param {string} title title of new task
   */
  function handleAddTask(title: string) {
    const newTask = {
      id: tasks.length,
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  /**
   * Update task title
   *
   * @param {{id, title}}
   */
  function handleUpdateTask({ id, title }: UpdateTaskParams) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, title } : t)));
  }

  /**
   * Delete task
   *
   * @param {number} taskId task id
   */
  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  /**
   * Toggle all task's completed
   *
   * @param {boolean} completed
   */
  function handleToggleAllTask(completed: boolean) {
    setTasks(
      tasks.map((t) => {
        return {
          ...t,
          completed,
        };
      })
    );
  }

  /**
   * Toggle task's completed
   *
   * @param {boolean} taskId
   *
   */
  function handleToggleTask(taskId: number) {
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  }

  /**
   * Clear completed task
   */
  function handleClearTasks() {
    setTasks(tasks.filter((t) => !t.completed));
  }

  return {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleToggleAllTask,
    handleToggleTask,
    handleClearTasks,
  };
};
