/* eslint-disable max-len */
import React from 'react'
import { Map, TileLayer, FeatureGroup} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import {connect} from 'react-redux'
import SentinelWMS from '../SentinelWMS'
import 'leaflet-draw/dist/leaflet.draw.css';
import "leaflet/dist/leaflet.css";
import './Map.scss'


const baseUrlTileLayer = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const getLatlon = (param) => {
  const coordinates =  param
  const coords = coordinates[0].map(val=>`${val.lat.toFixed(6)} ${val.lng.toFixed(6)}`).join(',')
  console.log(coords)
}


const Mapa = (props) => {
  const {coord, typeSatellite} = props
  const getWms = (type) => {
    if(type === 'sentinel'){
      return SentinelWMS(props.cloudValue)
    }
    return null
  }

  return (
    <Map
      style={{ height: "80%", width: "100vw" }}
      zoom={7}
      center={[coord.lat, coord.lon]}
      // maxZoom={15}
      minZoom={5}
    >
      <TileLayer url={baseUrlTileLayer} />
      {
        typeSatellite?getWms(typeSatellite):null
      }
      <FeatureGroup>
        <EditControl
          position="bottomright"

          // eslint-disable-next-line no-underscore-dangle
          onCreated={e => {getLatlon(e.layer._latlngs)}}
          draw={{
            marker: false,
            circle: false,
            rectangle: false,
            polygon: true,
            polyline: false,
            circlemarker: false
          }}
        />
        ;
      </FeatureGroup>
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
