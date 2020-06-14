/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect } from 'react';
import { Map, TileLayer, FeatureGroup, GeoJSON } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import './style.scss';

const Mapa = (props) => {
  const baseUrlTileLayer =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  const baseUrlState =
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png';

  const map = useRef(null);
  const geoJSONRef = useRef();

  const { GetBBox = () => {}, geoJSON } = props;

  useEffect(() => {
    if (!map.current || !geoJSON || !geoJSONRef.current) return;
    const mapLeaflet = map.current.leafletElement;
    const gJSON = geoJSONRef.current.leafletElement;
    gJSON.addData(geoJSON);
    mapLeaflet.fitBounds(gJSON.getBounds());
  }, [geoJSON]);

  const getLatlon = ({ latlng, bbox }) => {
    const [coords] = latlng;
    coords.push(coords[0]);
    const {
      _northEast: { lat: latNE, lng: lngNE },
      _southWest: { lat: latSW, lng: lngSW },
    } = bbox;
    const coordsWKT = coords
      .map((val) => `${val.lat.toFixed(6)} ${val.lng.toFixed(6)}`)
      .join(',');

    const data = {
      bbox: {
        latNE,
        lngNE,
        latSW,
        lngSW,
      },
      coordsWKT,
    };
    GetBBox(data);
  };

  return (
    <Map
      style={{ height: '100%', width: '100%' }}
      zoom={11}
      center={[-23.607392, -46.560112]}
      maxZoom={17}
      minZoom={5}
      ref={map}
    >
      <TileLayer url={baseUrlTileLayer} />
      <TileLayer url={baseUrlState} />

      <FeatureGroup>
        <EditControl
          position="bottomright"
          onCreated={(e) => {
            // eslint-disable-next-line no-underscore-dangle
            getLatlon({ latlng: e.layer._latlngs, bbox: e.layer._bounds });
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

export default Mapa;
