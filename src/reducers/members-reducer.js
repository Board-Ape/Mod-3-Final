const members = (state=[], action) => {
  switch (action.type) {
  case "MEMBER_SUCCESS":
    return action.members;
  default:
    return state;
  }
};

export default members;
