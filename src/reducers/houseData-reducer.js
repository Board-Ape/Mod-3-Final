const houseData = (state=[], action) => {
  switch (action.type) {
  case 'HOUSES_SUCCESS':
    return action.houses;
  default:
    return state;
  }
};

export default houseData;
