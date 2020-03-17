import {UPDATE_CLOUD} from '../action/actionTypes'

const inititalState = {
  cloud_value:50
}

export default (state=inititalState, action)=>{
  switch(action.type){
    case UPDATE_CLOUD:
      return {
        ...state,
        cloud_value:action.cloud_value
      }
    default:
      return state
  }
}
