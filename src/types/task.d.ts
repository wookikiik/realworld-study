export type TaskState = {
  /**
   * Task List
   */
  tasks: Task[];

  /**
   * Task status filter
   */
  statusFilter: string;

  /**
   * Tasks 초기화
   */
  initTask: () => void;
  /**
   * Task 로드
   *
   * @param {Task[]} initialTasks
   */
  loadTask: (initialTasks: Task[]) => void;
  /**
   * Add NEW task
   *
   * @param {string} title title of new task
   */
  addTask: (title: string) => void;
  /**
   * Update task title
   *
   * @param {{taskId, title}}
   */
  updateTask: ({ taskId, title }: { taskId: number; title: string }) => void;
  /**
   * Delete task
   *
   * @param {number} taskId task id
   */
  deleteTask: (taskId: number) => void;
  /**
   * Toggle all task's completed
   *
   * @param {boolean} completed
   */
  toggleAllTask: (completed: boolean) => void;
  /**
   * Toggle task's completed
   *
   * @param {boolean} taskId
   */
  toggleTask: (taskId: number) => void;
  /**
   * Clear completed task
   */
  clearTasks: () => void;

  /**
   * Apply status filter
   *
   * @param {string} status target status
   */
  applyStatusFilter: (status: string) => void;
};

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

export type TodoHeaderProps = {};

export type TodoFooterProps = {};

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
