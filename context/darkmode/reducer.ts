import { DarkModeAction, ActionType as Type } from "./types";

const reducer = (state: any, { type, payload }: DarkModeAction) => {
  switch (type) {
    case Type.DARKMODE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
        isMounted: true,
      };
  }
};

export { reducer };
