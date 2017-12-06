const timering = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case "START":
      return "started";
    case "STOP":
      return "stopped";
    case "CLEAR":
      return "cleared";
    default:
      return state;
  }
};

export default timering;
