import React, { useState } from 'react';

import { Modal, Button, Header } from 'semantic-ui-react';
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
    <div>
      <Button onClick={() => setModalState(true)}>Importar GeoJSON</Button>
      <Modal open={modalState}>
        <Modal.Header>Selecione um GeoJSON</Modal.Header>
        <Modal.Description>
          <Header>Clique ou jogue seu arquivo GeoJSON aqui</Header>
          <Dropzone onGetFile={onGetFile} />
        </Modal.Description>
        <Modal.Actions>
          <Button onClick={closeAndRemoveFile} negative>
            Cancelar
          </Button>
          <Button
            onClick={closeModal}
            positive
            labelPosition="right"
            icon="checkmark"
            content="Enviar Arquivo"
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ModalGeoJSON;
