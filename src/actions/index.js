export const fakeAction = () => ({type: 'FAKE'});

export const fetchHousesSuccess = (houses) => ({
  type: "HOUSES_SUCCESS",
  houses
});

export const fetchHouses = () => async (dispatch) => {
  try {
    const initialFetch = await fetch('http://localhost:3001/api/v1/houses');
    const fetchObject = await initialFetch.json();
    dispatch(fetchHousesSuccess(fetchObject));
  } catch (error) {
    return Error(error);
  }
};

export const fetchMembersSuccess = (members) => ({
  type: 'MEMBER_SUCCESS',
  members
});

export const fetchMembers = (swornMembers) => {
  return dispatch => {

    const unresolvedPromises = swornMembers.map( memberURL =>{
      const bodyObject = JSON.stringify({ url: memberURL });
      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: bodyObject
      })
        .then(response => response.json());
    });

    const promiseAll = Promise.all(unresolvedPromises);

    promiseAll.then( membersArray => {
      dispatch(fetchMembersSuccess(membersArray));
    });
  };
};

export const resetViewToHouses = () => ({
  type: 'RESET_VIEW'
});
