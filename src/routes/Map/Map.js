import React from 'react'
import {connect} from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MapComponent from '../../Components/Map/Map'

const Map = (props) => {
  const {satelliteType} = props
  return (
    <div style={{height:'100vh', width:'100vw', position:'relative'}}>
      <Header title="Header" />
      <MapComponent typeSatellite={satelliteType} />
      <Footer title="Footer" />
    </div>

  )
}

const storeToProp = store => ({
  satelliteType: store.satelliteTypeState.satellite_type
})

export default connect(storeToProp)(Map)
