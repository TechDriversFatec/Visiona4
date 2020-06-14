import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { getCatalog as apiGetCatalog } from '../../api';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Map from '../../Components/Map';
import ModalError from '../../Components/ModalError';
import ModalCatalog from '../../Components/ModalCatalog';
import './style.scss';

const WebGis = () => {
  const [coords, setCoords] = useState();
  const [geoJSON, setGeoJSON] = useState();
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const [modalErrorText, setModalErrorText] = useState('');
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [catalogIsLoading, setCatalogIsLoading] = useState(false);
  const [catalogData, setCatalogData] = useState({});

  const normalizeBbox = (bbox) => [
    bbox.lngSW,
    bbox.latSW,
    bbox.lngNE,
    bbox.latNE,
  ];

  const prepareFilter = (data) => {
    if (!coords) {
      throw new Error('CoordsNotDefined');
    }
    if (!data.rangedate.startDate || !data.rangedate.endDate) {
      throw new Error('DateRangeNotDefined');
    }
    const bbox = normalizeBbox(coords.bbox);
    const {
      cloudCoverage: cloudCover,
      rangedate: { startDate: dateInit, endDate: dateEnd },
    } = data;
    return {
      cloudCover,
      dateInit,
      dateEnd,
      bbox,
    };
  };
  const getCatalog = async (data) => {
    try {
      setCatalogVisible(true);
      setCatalogIsLoading(true);
      const filter = prepareFilter(data);
      const { data: response } = await apiGetCatalog(filter);
      setCatalogData(response);
      setCatalogIsLoading(false);
    } catch (error) {
      setCatalogVisible(false);
      if (error.message === 'DateRangeNotDefined') {
        setModalErrorText('Série de datas não definido');
      } else if (error.message === 'CoordsNotDefined') {
        setModalErrorText('Area de interesse não definida');
      } else {
        setModalErrorText('Erro interno tente novamente mais tarde');
      }
      setModalErrorVisible(true);
    }
  };

  const geoJSONFileToGeoJSON = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener('loadend', () => {
      setGeoJSON(JSON.parse(reader.result));
    });
  };

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div className="container">
        <Grid style={{ height: '100%' }}>
          <Grid.Column width={5} className="col">
            <SideBar
              onClickButton={getCatalog}
              onReceiveGeoJSON={geoJSONFileToGeoJSON}
            />
          </Grid.Column>
          <Grid.Column width={11} className="col">
            <Map GetBBox={(data) => setCoords(data)} geoJSON={geoJSON} />
          </Grid.Column>
        </Grid>
        <ModalError
          isVisible={modalErrorVisible}
          onClose={() => setModalErrorVisible(false)}
          text={modalErrorText}
        />
        <ModalCatalog
          isVisible={catalogVisible}
          isLoading={catalogIsLoading}
          catalog={catalogData}
        />
      </div>
    </div>
  );
};

export default WebGis;
