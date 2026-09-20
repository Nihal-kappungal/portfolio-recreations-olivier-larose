export const EASE = [0.33, 1, 0.68, 1];

export const lineVariants = {
  initial: { width: 0 },
  open: () => ({
    width: "100%",
    transition: { duration: 1.5, ease: EASE, delay: 0.2 },
  }),
};

export const rowVariants = {
  initial: { top: "50px" },
  open: (i) => ({
    top: "0px",
    transition: { duration: 0.5, ease: EASE, delay: 0.2 * i },
  }),
};

export const bodyVariants = {
  initial: { height: 0 },
  open: { height: "auto", transition: { duration: 0.5 } },
  closed: { height: 0, transition: { duration: 0.5 } },
};
