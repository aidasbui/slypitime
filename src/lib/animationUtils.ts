export const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-50dvh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.3,
      duration: 1,
    },
  },
  exit: {
    y: '100dvh',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

export const getTimeCardVariant = (delayFactor: number) => {
  return {
    hidden: {
      opacity: 0,
      y: '2rem',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + delayFactor * 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: '-2rem',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };
};
