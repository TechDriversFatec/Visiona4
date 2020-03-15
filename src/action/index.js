/* eslint-disable import/prefer-default-export */
import {UPDATE_COORD, UPDATE_SATELLITE, UPDATE_CLOUD} from './actionTypes'

export const updateCoords = coords => ({
  type: UPDATE_COORD,
  coords
})

export const updateSatelliteType = satelliteType => ({
  type:UPDATE_SATELLITE,
  satellite_type: satelliteType
})

export const updateCloudValue = cloudValue => ({
  type:UPDATE_CLOUD,
  cloud_value: cloudValue
})
