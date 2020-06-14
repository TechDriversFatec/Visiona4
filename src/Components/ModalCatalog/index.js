import React from 'react';
import { Modal, Button, Placeholder, PanelGroup, Panel, Tag } from 'rsuite';
import { FaCloud, FaExternalLinkAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

const ModalCatalog = (props) => {
  const { SetPagination = () => {} } = props;

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
                &nbsp;
                {c.thumbnail}
              </a>
            </p>
          </Panel>
        ))}
      </PanelGroup>
    );

  function next() {
    SetPagination(
      Math.min(catalog.pagination.page + 1, catalog.pagination.pages)
    );
  }

  function prev() {
    SetPagination(Math.max(catalog.pagination.page - 1, 1));
  }

  function Pagination() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: 10 }}> Pagina: </span>

        <div style={{ width: '115px', display: 'flex', alignItems: 'center' }}>
          <Button onClick={prev}>
            <BsCaretLeftFill />
          </Button>
          <div
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              backgroundColor: 'gray',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
            }}
          >
            <span style={{ color: 'white' }}>
              {catalog.pagination && catalog.pagination.page}
            </span>
          </div>
          <Button onClick={next}>
            <BsCaretRightFill />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Modal show={isVisible} onHide={onClose}>
      <Modal.Header>Catalogo de imagens</Modal.Header>
      <Modal.Body>
        {isLoading ? <Placeholder.Paragraph rows={5} /> : catalogList()}
      </Modal.Body>
      <Modal.Footer
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {Pagination()}
        <Button onClick={onClose} color="green">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCatalog;
