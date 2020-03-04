import React from 'react'
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const baseUrlTileLayer = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const Mapa = () => (
  <Map
    style={{ height: "100vh",width: "100%" }}
    zoom={7}
    center={[-15.5597331,-53.8948822]}
    maxZoom={15}
    minZoom={5}
  >
    <TileLayer url={baseUrlTileLayer} />
  </Map>
  )


export default Mapa
