import React from 'react'
import {WMSTileLayer} from 'react-leaflet'

const key = process.env.REACT_APP_KEY_API_SENTINEL;

const baseUrlWmsTileLayer =
  `https://services.sentinel-hub.com/ogc/wms/${key}`

const SentinelWMS = (props)=> {
  return(
    <WMSTileLayer
      url={baseUrlWmsTileLayer}
      layers="TRUE_COLOR"
      preset="TRUE_COLOR"
      maxcc={props}
      time="2020-02-25"
      format="image/png"
    />
  )
}




export default SentinelWMS
