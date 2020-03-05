import React from 'react'
import { Map, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Map.scss'

const baseUrlTileLayer = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const baseUrlWmsTileLayer = "https://services.sentinel-hub.com/ogc/wms/2dcbdfd8-a497-42d8-8a13-c4887489d077"

const Mapa = (props) => (
  <Map
    style={{ height: "80%", width: "100vw" }}
    zoom={7}
    center={["-15.5597331", "-53.8948822"]}
    maxZoom={15}
    minZoom={5}
  >
    <TileLayer url={baseUrlTileLayer} />
    <WMSTileLayer
      url={baseUrlWmsTileLayer}
      layers={props.typeSatellite === "sentinel" ? "AGRICULTURE" : null}
      preset="AGRICULTURE"
      maxcc="20"
      time="2020-02-25"
      maxCloudCoverage="100"
        // srs="EPSG:4326"
      format="image/png"
    />
    <div />
  </Map>
);
export default Mapa;
