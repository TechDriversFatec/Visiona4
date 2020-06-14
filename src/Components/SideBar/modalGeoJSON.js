import React, { useState } from 'react';
import { Modal, Button } from 'rsuite';
import Dropzone from '../Dropzone';

const ModalGeoJSON = (props) => {
  const [modalState, setModalState] = useState(false);
  const [file, setFile] = useState(null);
  const { onClose = () => {} } = props;
  const handleModalClose = () => {
    onClose(file);
  };

  const closeModal = () => {
    setModalState(false);
    handleModalClose();
  };

  const closeAndRemoveFile = () => {
    setFile(null);
    closeModal();
  };

  const onGetFile = (fileArray) => {
    if (fileArray && fileArray.length) {
      setFile(fileArray[0]);
    } else {
      setFile(null);
    }
  };
  return (
    <div className="upload">
      <Button onClick={() => setModalState(true)}>Importar GeoJSON</Button>
      <Modal show={modalState} onHide={closeAndRemoveFile}>
        <Modal.Header>
          <Modal.Title>Selecione um GeoJSON</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropzone
            onGetFile={onGetFile}
            mimeTypes={['application/geo+json', 'application/json']}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="subtle" onClick={closeAndRemoveFile}>
            Cancel
          </Button>
          <Button appearance="primary" onClick={closeModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalGeoJSON;
