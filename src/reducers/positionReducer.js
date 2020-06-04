import { UPDATE_COORD } from '../action/actionTypes';

const initalState = {
  lat: -15.5597331,
  lon: -53.8948822,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COORD:
      return {
        ...state,
        lat: action.coords.lat,
        lon: action.coords.lon,
      };
    default:
      return state;
  }
};
