import {combineReducers} from 'redux'
import positionReducer from './positionReducer'
import satelliteReducer from './satelliteReducer'

// eslint-disable-next-line import/prefer-default-export
export const Reducers = combineReducers({
  positionState:positionReducer,
  satelliteTypeState: satelliteReducer
})
