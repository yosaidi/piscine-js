const flow = (funcs) => {
    return (...args) => {
      return funcs.reduce((acc, func) => [func(...acc)], args)[0];
    };
  };