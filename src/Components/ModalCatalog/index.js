import React from 'react';
import { Modal, Button, Placeholder, PanelGroup, Panel, Tag } from 'rsuite';
import { FaCloud, FaExternalLinkAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const ModalCatalog = (props) => {
  const {
    onClose = () => {},
    isVisible = false,
    isLoading = false,
    catalog = {},
  } = props;

  const catalogList = () =>
    catalog.list && (
      <PanelGroup>
        {catalog.list.map((c) => (
          <Panel
            header={
              <span>
                {c.id}&nbsp;<Tag>{c.collection}</Tag>
              </span>
            }
          >
            <p>
              <FaCloud />
              &nbsp;{c.cloudCover}%
            </p>
            <p>
              <MdDateRange />
              &nbsp;
              {new Date(c.datetime).toLocaleString()}
            </p>
            <p>
              <a href={c.thumbnail} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                {c.thumbnail}
              </a>
            </p>
          </Panel>
        ))}
      </PanelGroup>
    );

  return (
    <Modal show={isVisible}>
      <Modal.Header>Catalogo de imagens</Modal.Header>
      <Modal.Body>
        {isLoading ? <Placeholder.Paragraph rows={5} /> : catalogList()}
      </Modal.Body>
      <Modal.Footer>
        <br />
        <Button onClick={onClose} color="green">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCatalog;
