import { create } from 'zustand';
import { TaskState } from '../../../types/task';

const useTasksStore = create<TaskState>((set) => ({
  tasks: [],
  statusFilter: '',

  initTask: () =>
    set(() => ({
      tasks: [],
    })),

  loadTask: (initialTasks) =>
    set(() => ({
      tasks: initialTasks,
    })),

  addTask: (title) =>
    set(({ tasks }) => ({
      tasks: [...tasks, { id: tasks.length, title, completed: false }],
    })),

  updateTask: ({ taskId, title }) =>
    set(({ tasks }) => ({
      tasks: tasks.map((t) => (t.id === taskId ? { ...t, title } : t)),
    })),

  deleteTask: (taskId) =>
    set(({ tasks }) => ({
      tasks: tasks.filter((t) => t.id !== taskId),
    })),

  toggleAllTask: (completed) =>
    set(({ tasks }) => ({
      tasks: tasks.map((t) => {
        return { ...t, completed };
      }),
    })),

  toggleTask: (taskId) =>
    set(({ tasks }) => ({
      tasks: tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      ),
    })),

  clearTasks: () =>
    set(({ tasks }) => ({
      tasks: tasks.filter((t) => !t.completed),
    })),

  applyStatusFilter: (status) =>
    set(() => ({
      statusFilter: status,
    })),
}));

export default useTasksStore;
