import React, {useState} from 'react'
import { Icon, Button } from 'semantic-ui-react'
import Sidebar from '../Sidebar'
import './Base.scss'

const Base = (props) => {
  const [visible, setVisible] = useState(false)
  const openBar = () => {
    setVisible(true)
  }
  const closeBar = () => {
    setVisible(false)
  }
  const toggleBar = () => {
    if (visible) {
      closeBar()
    }else{
      openBar()
    }
  }

  return(
    <div>
      <Sidebar visible={visible}>
        <header className="header">
          <h1 className="title">Talhões</h1>
          <Button onClick={toggleBar}>
            <Icon name="sidebar" />
          </Button>
        </header>
        {props.children}
      </Sidebar>
    </div>
  );
};

export default Base
