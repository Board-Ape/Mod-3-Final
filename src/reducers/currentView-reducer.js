const currentView = (state = 'houses', action) => {
  switch (action.type) {
  case 'HOUSES_SUCCESS':
    return 'houses';
  case 'MEMBER_SUCCESS':
    return 'members';
  case 'RESET_VIEW':
    return 'houses';
  default:
    return state;
  }
};

export default currentView;
