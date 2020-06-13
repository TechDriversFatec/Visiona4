import React, { useState } from 'react';
import { Map, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import './style.scss';

const Mapa = () => {
  const [coords, setCoords] = useState('');

  const baseUrlTileLayer =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  const baseUrlState =
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png';

  const getLatlon = (param) => {
    const coordinates = param;
    const coordsLatLon = coordinates[0];

    coordsLatLon.push(coordinates[0][0]);
    const coordsLngLat = coordsLatLon
      .map((val) => `${val.lat.toFixed(6)} ${val.lng.toFixed(6)}`)
      .join(',');
    setCoords(coordsLngLat);
    console.log('coordinates -->', coordsLngLat);
    // setVisible(true);
    return coords;
  };

  return (
    <Map
      style={{ height: '100%' }}
      zoom={11}
      center={[-23.607392, -46.560112]}
      maxZoom={17}
      minZoom={5}
    >
      <TileLayer url={baseUrlTileLayer} />
      <TileLayer url={baseUrlState} />

      <FeatureGroup>
        <EditControl
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
        />
      </FeatureGroup>
    </Map>
  );
};

export default Mapa;
