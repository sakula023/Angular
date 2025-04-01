export interface Tasks {
    id: string;
    dueDate: string;
    summary: string;
    title: string;
    userId: string;
  }

  export interface NewTaskData {
    title: string;
    summary: string;
    dueDate: string;
  }