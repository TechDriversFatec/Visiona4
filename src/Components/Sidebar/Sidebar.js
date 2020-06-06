import React from 'react';
import { Icon, Menu, Sidebar, Segment } from 'semantic-ui-react';

import './Sidebar.scss';
import { Link } from 'react-router-dom';

const openBar = (props) => {
  const { visible, children } = props;
  return (
    <div className="bar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
        >
          <Link to="/">
            <Menu.Item>
              <Icon name="desktop" />
              Tratamento de imagem
            </Menu.Item>
          </Link>
          <Link to="/AOI">
            <Menu.Item>
              <Icon name="map" />
              WebGis
            </Menu.Item>
          </Link>
          <Link to="/about">
            <Menu.Item>
              <Icon name="address card" />
              About
            </Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher>{children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default openBar;
