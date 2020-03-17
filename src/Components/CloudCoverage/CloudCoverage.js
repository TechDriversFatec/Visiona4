/* eslint-disable react/jsx-one-expression-per-line */
import React, {useState} from 'react'
import { Slider } from "react-semantic-ui-range";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconCloud from '../../icon/Cloud-icon.png'
import { updateCloudValue } from '../../action'


import "semantic-ui-css/semantic.min.css";
import "./CloudCoverage.scss"


function CloudCoverage (props) {
  const {updateCloudValue} = props
  const [value, setValue] = useState(50);

  const settings = {
    start: 50,
    min: 0,
    max: 100,
    step: 1,
    onChange: value => {
      setValue(value)
      updateCloudValue(value)
    }
  };

  return(
    <div className="cloud-coverage-container">
      <span className="percent-value">{value} %</span>
      <img src={IconCloud} alt="icone" className="icon-cloud" />
      <div className="slider">
        <Slider value={value} color="inverted-blue" settings={settings} />
      </div>
    </div>
  )
}

const storeToProps = store => ({
  cloud_value: store.cloudState.cloud_value
})
const dispatchToProps = dispatch => bindActionCreators({updateCloudValue}, dispatch)

export default connect(storeToProps, dispatchToProps)(CloudCoverage)

