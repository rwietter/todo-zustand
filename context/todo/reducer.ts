import { Action, ActionType as Type, Fileds, Task } from "./types";
import { v4 as uuidv4 } from 'uuid';

const reducer = (state: any, { type, payload }: Action) => {
  switch (type) {
    case Type.TODO_ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: uuidv4(), task: payload, completeTask: false }],
        isLoading: false,
      };
    case Type.TODO_DELETE_TASK:
      return {
        tasks: state.tasks.filter((item: Fileds) => item.id !== payload),
        isLoading: false,
      };
    case Type.TODO_COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item: Fileds) => {
          if (item.id === payload) {
            return { ...item, completeTask: !item.completeTask };
          }
          return item;
        }, []),
        isLoading: false,
      };
  }
};

export { reducer };
