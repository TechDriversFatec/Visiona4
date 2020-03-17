import {combineReducers} from 'redux'
import positionReducer from './positionReducer'
import satelliteReducer from './satelliteReducer'
import cloudReducer from './cloudReducer'
import geoJSONReducer from "./geoJSONReducer";
// eslint-disable-next-line import/prefer-default-export
export const Reducers = combineReducers({
  positionState:positionReducer,
  satelliteTypeState: satelliteReducer,
  cloudState: cloudReducer,
  geoJSONState: geoJSONReducer,

})
