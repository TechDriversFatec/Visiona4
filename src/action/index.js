/* eslint-disable import/prefer-default-export */
import {UPDATE_COORD, UPDATE_SATELLITE} from './actionTypes'

export const updateCoords = coords => ({
  type: UPDATE_COORD,
  coords
})

export const updateSatelliteType = satelliteType => ({
  type:UPDATE_SATELLITE,
  satellite_type: satelliteType
})
