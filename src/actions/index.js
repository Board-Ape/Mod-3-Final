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
      console.log(memberURL);
      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: {url: memberURL }
      })
        .then(response => console.log(response));
    });

    const promiseAll = Promise.all(unresolvedPromises);

    promiseAll.then( membersArray => {
      dispatch(fetchMembersSuccess(membersArray));
    });

  };
  // fetch initial api
  // map through sworn members and make fetch post to characters
  // dispatch array of members to store

};
