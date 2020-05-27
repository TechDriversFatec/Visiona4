import React from 'react'
import {connect} from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MapComponent from '../../Components/Map/Map'

const AOImap = (props) => {
  const {satelliteType, cloudValue} = props
  return (
    <div style={{height:'100vh', width:'100vw', position:'relative'}}>
      <Header />
      <MapComponent typeSatellite={satelliteType} cloudValue={cloudValue} />
      <Footer />
    </div>
  )
}

const storeToProp = store => ({
  satelliteType: store.satelliteTypeState.satellite_type,
  cloudValue: store.cloudState.cloud_value
})

export default connect(storeToProp)(AOImap)
