export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  y: -10,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const imageHover = {
  scale: 1.03,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonHover = {
  y: -3,
  scale: 1.03,
  transition: {
    duration: 0.25,
    ease: "easeOut",
  },
};