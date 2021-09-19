import { styled } from "@stitches/react";

export const DefaultCheckbox = styled("div", {
  display: "grid",
  gridTemplateColumns: "min-content auto",
  placeItems: 'center',
  placeContent: 'center',
  fontSize: "1rem",
  color: "var(--color)",

  "&--disabled": {
    color: "var(--disabled)",
  },

  ".checkbox__control": {
    display: "inline-grid",
    width: "1em",
    height: "1em",
    borderRadius: "0.25em",
    border: "0.1em solid currentColor",

    'svg': {
      transition: "transform 0.1s ease-in 25ms",
      transform: "scale(0)",
      transformOrigin: "bottom left",
    },
  },

  ".checkbox__input": {
    display: "grid",
    gridTemplateAreas: "checkbox",

    "> *": {
      gridArea: "checkbox",
    },

    'input': {
      opacity: "0",
      width: "1em",
      height: "1em",

      "&:focus + .checkbox__control": {
        boxShadow: "0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor",
      },

      "&:checked + .checkbox__control svg": {
        transform: "scale(1)",
      },

      "&:disabled + .checkbox__control": {
        color: "var(--disabled)",
      },
    },
  },
});
