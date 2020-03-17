import { SET_GEOJSON } from "../action/actionTypes";

const inititalState = {
  geoJSON: undefined,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case SET_GEOJSON:
      return {
        ...state,
        geoJSON: action.geoJSON,
      };
    default:
      return state;
  }
};
