/* eslint-disable max-len */
import React from 'react'
import { Map, TileLayer } from "react-leaflet";
import {connect} from 'react-redux'
import SentinelWMS from '../SentinelWMS'
import "leaflet/dist/leaflet.css";
import './Map.scss'

const baseUrlTileLayer = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";


const getWms = (type) => {
  if(type === 'sentinel'){
    return SentinelWMS()
  }
  return null
}

const Mapa = (props) => {
  const {coord, typeSatellite} = props
  return (
    <Map
      style={{ height: "80%", width: "100vw" }}
      zoom={7}
      center={[coord.lat, coord.lon]}
      maxZoom={15}
      minZoom={5}
    >
      <TileLayer url={baseUrlTileLayer} />
      {
        typeSatellite?getWms(typeSatellite):null
      }
      <div />
    </Map>
  )
};
const mapStateToProps = store =>({
  coord:{
    lat:store.positionState.lat,
    lon:store.positionState.lon
  }
})
export default connect(mapStateToProps)(Mapa);
