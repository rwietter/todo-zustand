export type DarkMode = {
  theme: string | null;
  isMounted: boolean,
};

export type DarkModeAction = {
  type: string;
  payload: string;
};

export enum ActionType {
  DARKMODE_THEME = "DARKMODE_THEME",
  DARKMODE_LOAD_THEME = "DARKMODE_LOAD_THEME",
}
