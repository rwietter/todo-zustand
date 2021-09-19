import { styled } from "@stitches/react";

export const HeaderComponent = styled("header", {
  width: "$width900",
  height: "4rem",
  background: "$header",
  color: "$text",
  fontSize: "$font300",
  transition: "$transi100",
});

export const NavComponent = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 3rem",
  transition: "$transi100",
  height: "100%",
  listStyle: "none",

  li: {
    color: "$texts",
  },

  button: {
    background: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
    svg: {
      transition: "transi100",
    },
  },
});
