import {combineReducers} from 'redux'
import positionReducer from './positionReducer'

// eslint-disable-next-line import/prefer-default-export
export const Reducers = combineReducers({
  positionState:positionReducer
})
