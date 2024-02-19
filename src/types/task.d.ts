export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskAction = {
  type: string;
  payload?: any;
};

export type TaskContextData = {
  tasks: Task[];
  actions: {
    addTask;
    updateTask;
    deleteTask;
    toggleAllTask;
    toggleTask;
    clearTasks;
  };
};

export type TasksFilter = {
  statusFilter: string;
  setStatusFilter: Dispatch<SetStateAction<string>>;
};

export type UpdateTaskParams = {
  id: number;
  title: string;
};

export type TodoAppHeaderProps = {};

export type TodoAppFooterProps = {};

export type TaskListProps = {};

export type TaskItemProps = {
  task: Task;
};

export type TaskAdderProps = {};

export type TaskEditorProps = {
  task: Task;
  onEndEditMode: () => void;
};

export type TaskFilterProps = {};
