import { styled } from "@stitches/react";

export const DefaultButton = styled("button", {
  width: "$width800",
  height: "2.5rem",
  background: "$secondary",
  color: "$white",
  border: "$none",
  outline: "none",
  borderRadius: "$border100",
  fontSize: "$font300",
  marginTop: "2rem",
  cursor: "pointer",
  transition: "$transi100",

  "&:hover": {
    background: "$primary",
  },
});
