import React from 'react'
import { Map, TileLayer, FeatureGroup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import 'leaflet-draw/dist/leaflet.draw.css';

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
    <FeatureGroup>
      <EditControl
        position="bottomright"

        onCreated={e => {console.log(e)}}
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


export default Mapa
