import {UPDATE_SATELLITE} from '../action/actionTypes'

const inititalState = {
  satellite_type:'blank'
}

export default (state=inititalState, action)=>{
  switch(action.type){
    case UPDATE_SATELLITE:
      return {
        ...state,
        satellite_type:action.satellite_type
      }
    default:
      return state
  }
}
