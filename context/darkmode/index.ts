import create from "zustand";
import { persist, redux } from "zustand/middleware";
import { reducer } from "./reducer";
import { DarkMode } from "./types";

const state: DarkMode = {
  theme: 'dark',
  isMounted: false,
};

const useDarkModeStore = create(
  persist(redux(reducer, state), { name: "darkmode-store" })
);

export { useDarkModeStore };
