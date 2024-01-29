export function useTaskReducer(tasks, action) {
  switch (action.type) {
    case 'add_task':
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false,
        },
      ];
    case 'update_task':
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    case 'delete_task':
      return tasks.filter((t) => t.id !== action.id);
    case 'done_task':
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    default:
      throw Error('Action Not Found!');
  }
}
