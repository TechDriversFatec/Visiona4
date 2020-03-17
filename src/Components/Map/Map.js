/* eslint-disable max-len */
import React, {useRef} from "react";
import { Map, TileLayer, FeatureGroup, GeoJSON} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { connect } from "react-redux";
import SentinelWMS from "../SentinelWMS";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const baseUrlTileLayer =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const getLatlon = param => {
  const coordinates = param;
  const coords = coordinates[0].map(val => `${val.lat.toFixed(6)} ${val.lng.toFixed(6)}`).join(",");
  console.log(coords);
};

const getWms = type => {
  if (type === "sentinel") {
    return SentinelWMS();
  }
  return null;
};
const Mapa = props => {
  const mapRef = useRef(null)
  const geoJSONRef = useRef(null)
  const { coord, typeSatellite, geoJSON } = props;
  const updateGeoJSON = ()=>{
    if(!mapRef.current || !geoJSONRef.current) return
    const map = mapRef.current.leafletElement
    const gJSON = geoJSONRef.current.leafletElement
    gJSON.addData(geoJSON)
    map.fitBounds(gJSON.getBounds())
  }
  updateGeoJSON()
  return (
    <Map
      style={{ height: "80%", width: "100vw" }}
      zoom={7}
      center={[coord.lat, coord.lon]}
      // maxZoom={15}
      minZoom={5}
      ref={mapRef}
    >
      <TileLayer url={baseUrlTileLayer} />
      {typeSatellite ? getWms(typeSatellite) : null}
      <FeatureGroup>
        <EditControl
          position="bottomright"
          onCreated={e => {
            // eslint-disable-next-line no-underscore-dangle
            getLatlon(e.layer._latlngs);
          }}
          draw={{
            marker: false,
            circle: false,
            rectangle: false,
            polygon: true,
            polyline: false,
            circlemarker: false,
          }}
        />
        <GeoJSON ref={geoJSONRef} />
      </FeatureGroup>
    </Map>
  );
};

const mapStateToProps = store => ({
  coord: {
    lat: store.positionState.lat,
    lon: store.positionState.lon,
  },
  geoJSON: store.geoJSONState.geoJSON,
});
export default connect(mapStateToProps)(Mapa);
