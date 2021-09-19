import { FormEvent } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/Input/input";
import { useTodoStore } from "../../context/todo";
import { actions } from "../../context/todo/actions";
import { Fileds } from "../../context/todo/types";
import { St } from "../../styles/styles";

const Tasks = () => {
  const { tasks, isLoading } = useTodoStore();
  const { saveTask, deleteTask, completeTask }: any = actions();

  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault();
    const payload: string = (e.target as any).task.value;
    return payload.trim().length > 0 && saveTask(payload);
  };

  const handleTaskDelete = (id: string) => deleteTask(id);

  const handleCompleteTask = (id: string) => completeTask(id);
  return (
    <St.layout.Main>
      <St.with.FormContainer>
        <St.with.Form onSubmit={handleSubmit}>
          <h1>O que deseja fazer hoje ?</h1>
          <St.with.Task>
            <St.with.Label htmlFor="task">Tarefa</St.with.Label>
            <Input type="text" name="task" id="task" />
            <Button type="submit">Salvar</Button>
          </St.with.Task>
        </St.with.Form>
      </St.with.FormContainer>
      <St.with.Todo>
        <St.with.TodoList>
          {isLoading ? (
            <h3>Nada por aqui</h3>
          ) : (
            tasks.map((task: Fileds) => {
              return (
                <div key={task.id} className="todolist-container">
                  <St.with.CompleteTask
                    type="checkbox"
                    checked={task.completeTask}
                    name="complete-task"
                    id="complete-task"
                    onClick={() => handleCompleteTask(task.id)}
                  />
                  <li id={task.id}>{task.task}</li>
                  <div
                    className={
                      task.completeTask ? "complete-task" : "incomplete-task"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleTaskDelete(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </St.with.TodoList>
      </St.with.Todo>
    </St.layout.Main>
  );
};

export { Tasks };
