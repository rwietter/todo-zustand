import { ActionType as Types } from "./types";
import { unstable_batchedUpdates } from "react-dom";
import { useDarkModeStore as store } from "./index";

const darkModeActions = () => {
  return unstable_batchedUpdates(() => ({
    changeTheme: (payload: string) => {
      store.getState().dispatch({ type: Types.DARKMODE_THEME, payload });
    },
  }));
};

export { darkModeActions };
