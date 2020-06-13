import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import Sidebar from '../Sidebar/Sidebar';
// import './Base.scss';

const Base = (props) => {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const openBar = () => {
    setVisible(true);
  };
  const closeBar = () => {
    setVisible(false);
  };
  const toggleBar = () => {
    if (visible) {
      closeBar();
    } else {
      openBar();
    }
  };

  return (
    <div>
      <Sidebar visible={visible}>
        <header className="head">
          <Button className="bnt" color="black" onClick={toggleBar}>
            <Icon name="sidebar" />
          </Button>
          <h1 className="title">Talhões</h1>
        </header>
        {children}
      </Sidebar>
    </div>
  );
};

export default Base;
