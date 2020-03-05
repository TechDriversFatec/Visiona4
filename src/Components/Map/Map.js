/* eslint-disable max-len */
import React from 'react'
import { Map, TileLayer, WMSTileLayer } from "react-leaflet";
import {connect} from 'react-redux'
import "leaflet/dist/leaflet.css";
import './Map.scss'

const baseUrlTileLayer = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const baseUrlWmsTileLayer = "https://services.sentinel-hub.com/ogc/wms/2dcbdfd8-a497-42d8-8a13-c4887489d077"

const getWms = ()=>(
  <WMSTileLayer
    url={baseUrlWmsTileLayer}
    layers="AGRICULTURE"
    preset="AGRICULTURE"
    maxcc="20"
    time="2020-02-25"
    maxCloudCoverage="100"
    // srs="EPSG:4326"
    format="image/png"
  />
)

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
        typeSatellite?getWms():null
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
