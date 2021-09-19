import { styled } from "@stitches/react";

const Main = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "20rem 1fr",
  placeContent: "start",
  placeItems: "center",
  padding: "0",
  minHeight: "calc(100vh - 4rem)",
  background: "$gray100",
  color: "$texts",
  transition: "$transi100",

  "@media(min-width: 720px)": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    padding: "6rem 0 0 0",
  },
});

const FormContainer = styled("section", {
  gridColumn: "1/2",
  gridRow: "1/2",
  width: "80%",

  "@media(min-width: 720px)": {
    gridColumn: "1/1",
    width: "max-content",
    gridRow: "1/1",
    alignSelf: "start",
  },
});

const Todo = styled("section", {
  gridColumn: "1/2",
  gridRow: "2/3",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "3rem",
  justifySelf: "start",
  alignSelf: "start",

  "@media(min-width: 720px)": {
    gridColumn: "2/3",
    gridRow: "1/2",
    justifySelf: "start",
    alignSelf: "start",
    alignItems: "start",
    justifyContent: "start",
  },
});

const Form = styled("form", {
  display: "flex",
  flexFlow: "column",

  h1: {
    fontSize: "$font800",
    border: "none",
    padding: 0,
    margin: 0,
  },
});

const Task = styled("div", {
  display: "flex",
  flexFlow: "column",
  width: "100%",
});

const Label = styled("label", {
  padding: "2rem 0 1rem 0",
  fontSize: "$font300",
});

const CompleteTask = styled("input", {
  alignSelf: "center",
  marginLeft: ".5rem",
});

const TodoList = styled("ul", {
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "column",
  alignItems: "center",
  width: "80%",
  transition: "$transi100",
  color: "$texts",

  "@media(min-width: 620px)": {
    width: "80%",
  },

  ".todolist-container": {
    background: "$gray200",
    width: "100%",
    display: "flex",
    position: "relative",
    transition: "$transi100",
  },

  ".todolist-container + .todolist-container": {
    marginTop: "1rem",
  },

  ".incomplete-task": {
    display: "none",
  },

  ".complete-task": {
    height: "1px",
    background: "$tertiary",
    position: "absolute",
    left: "30px",
    right: "40px",
    top: "30px",
    transition: "$transi100",
  },

  li: {
    padding: "1.2rem 1rem 1.2rem 0.3rem",
    width: "100%",
    borderRadius: "4px",
    background: "$gray200",
    color: "$texts",
    transition: "$transi100",
  },

  button: {
    border: "$none",
    color: "$white",
    outline: "none",
    fontSize: "$font300",
    cursor: "pointer",
    transition: "$transi100",
    background: "$gray200",

    svg: {
      stroke: "$tertiary",
      transition: "$transi100",

      "&:hover": {
        stroke: "$quinary",
      },
    },
  },
});

export const St = {
  layout: {
    Main,
  },
  with: {
    FormContainer,
    Todo,
    Form,
    Task,
    Label,
    TodoList,
    CompleteTask,
  },
};
