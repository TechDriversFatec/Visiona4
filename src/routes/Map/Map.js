import React from 'react'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MapComponent from '../../Components/Map/Map'

const Map = () => (
  <div style={{height:'100vh', width:'100vw', position:'relative'}}>
    <Header title="Header" />
    <MapComponent typeSatellite="sentinel" />
    <Footer title="Footer" />
  </div>
)

export default Map
