export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type UpdateTaskParams = {
  id: number;
  title: string;
};

export type TodoAppHeaderProps = {
  onAddTask: (title: string) => void;
};

export type FooterProps = {
  tasks: Task[];
  onClearTasks: () => void;
};

export type TaskListProps = {
  tasks: Task[];
  onUpdateTask: ({ id, title }: UpdateTaskParams) => void;
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
  onToggleAllTask: (completed: boolean) => void;
};

export type TaskItemProps = {
  task: Task;
  onUpdateTask: ({ id, title }: UpdateTaskParams) => void;
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
};

export type TaskEditorProps = {
  task: Task;
  onUpdateTask: ({ id, title }: UpdateTaskParams) => void;
  onEndEditMode: () => void;
};

export type TaskAdderProps = {
  onAddTask: (title: string) => void;
};

export type TaskFilterProps = {};
