/* eslint-disable import/prefer-default-export */
import { UPDATE_COORD, UPDATE_SATELLITE, SET_GEOJSON } from "./actionTypes";

export const updateCoords = coords => ({
  type: UPDATE_COORD,
  coords,
});

export const updateSatelliteType = satelliteType => ({
  type: UPDATE_SATELLITE,
  satellite_type: satelliteType,
});

export const updateGeoJson = geoJSON => ({
  type: SET_GEOJSON,
  geoJSON,
});
