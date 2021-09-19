export type Fileds = {
  id: string;
  task: string;
  completeTask?: boolean;
};

export type Action = {
  type: string,
  payload: string;
}

export type Task = {
  tasks: Fileds[],
  isLoading: boolean,
};


export enum ActionType {
  TODO_ADD_TASK = 'TODO_ADD_TASK',
  TODO_DELETE_TASK = 'TODO_DELETE_TASK',
  TODO_COMPLETE_TASK = 'TODO_COMPLETE_TASK'
}
