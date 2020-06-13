/* eslint-disable max-len */
import React, { useRef } from 'react';
import { Map, TileLayer, FeatureGroup, GeoJSON } from 'react-leaflet';
// import { EditControl } from 'react-leaflet-draw';
import { connect } from 'react-redux';
// import SentinelWMS from '../SentinelWMS';
// import AOImodal from '../AOImodal/AOImodal';
// import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import './style.scss';

const Mapa = (props) => {
  const baseUrlTileLayer =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  const baseUrlState =
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png';

  // const [visible, setVisible] = useState(false);
  // const [coords, setCoords] = useState('');

  // const getLatlon = (param) => {
  //   const coordinates = param;
  //   const coordsLatLon = coordinates[0];

  //   coordsLatLon.push(coordinates[0][0]);
  //   const coordsLngLat = coordsLatLon
  //     .map((val) => `${val.lat.toFixed(6)} ${val.lng.toFixed(6)}`)
  //     .join(',');
  //   setCoords(coordsLngLat);
  //   setVisible(true);
  //   return coords;
  // };

  const { coord, typeSatellite, geoJSON } = props;
  const mapRef = useRef(null);
  const geoJSONRef = useRef(null);
  const updateGeoJSON = () => {
    if (!mapRef.current || !geoJSONRef.current || !geoJSON) return;
    const map = mapRef.current.leafletElement;
    const gJSON = geoJSONRef.current.leafletElement;
    gJSON.addData(geoJSON);
    map.fitBounds(gJSON.getBounds());
  };

  const getWms = (type) => {
    if (type === 'sentinel') {
      // return SentinelWMS(props.cloudValue);
    }
    return null;
  };
  updateGeoJSON();
  return (
    <Map
      style={{ width: '100%' }}
      zoom={7}
      center={[coord.lat, coord.lon]}
      maxZoom={17}
      minZoom={5}
      ref={mapRef}
    >
      <TileLayer url={baseUrlTileLayer} />
      <TileLayer url={baseUrlState} />
      {typeSatellite ? getWms(typeSatellite) : null}
      <FeatureGroup>
        {/* <EditControl
          position="bottomright"
          onCreated={(e) => {
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
        /> */}
        <GeoJSON ref={geoJSONRef} />
      </FeatureGroup>
      {/* <AOImodal
        visible={visible}
        onClose={() => setVisible(false)}
        coords={coords}
      /> */}
    </Map>
  );
};

const mapStateToProps = (store) => ({
  coord: {
    lat: store.positionState.lat,
    lon: store.positionState.lon,
  },
  geoJSON: store.geoJSONState.geoJSON,
});
export default connect(mapStateToProps)(Mapa);
