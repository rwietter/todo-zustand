import { Task } from './types';
import create from "zustand";
import { persist, redux } from "zustand/middleware";
import { reducer } from "./reducer";

const state: Task = {
  tasks: [],
  isLoading: true
}

const useTodoStore = create(persist(redux(reducer, state), { name: 'todo-store' }))

export { useTodoStore }
