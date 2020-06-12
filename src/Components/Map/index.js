import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import './style.scss';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const baseUrlTileLayer =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  const baseUrlState =
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png';

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
    </Map>
  );
};

export default Mapa;
