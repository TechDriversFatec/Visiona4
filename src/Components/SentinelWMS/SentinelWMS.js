import React from 'react'
import {WMSTileLayer} from 'react-leaflet'

const baseUrlWmsTileLayer =
  "https://services.sentinel-hub.com/ogc/wms/2dcbdfd8-a497-42d8-8a13-c4887489d077"

const SentinelWMS = (props)=> {
  return(
    <WMSTileLayer
      url={baseUrlWmsTileLayer}
      layers="TRUE_COLOR"
      preset="TRUE_COLOR"
      maxcc={props}
      time="2020-02-25"
      // maxCloudCoverage={props}
      // srs="EPSG:4326"
      format="image/png"
    />
  )
}




export default SentinelWMS
