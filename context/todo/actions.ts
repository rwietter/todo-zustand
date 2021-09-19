
import { ActionType as Types } from './types';
import { unstable_batchedUpdates } from 'react-dom'; // or 'react-native'
import { useTodoStore as store } from './index';

const actions = () => {
  return unstable_batchedUpdates(() => ({
    saveTask: (payload: string) => {
      store.getState().dispatch({ type: Types.TODO_ADD_TASK, payload });
    },
    deleteTask: (payload: string) => {
      store.getState().dispatch({ type: Types.TODO_DELETE_TASK, payload });
    },
    completeTask: (payload: string) => {
      store.getState().dispatch({ type: Types.TODO_COMPLETE_TASK, payload });
    },
  }));
};

export { actions };
