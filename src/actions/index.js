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
