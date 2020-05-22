/* eslint-disable react/jsx-props-no-spreading */
import React, { useState} from "react";
import { Modal, Icon, Button } from "semantic-ui-react";

const AOImodal = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => setOpen(true);

  return (
    <div>
      <Button icon color="grey" onClick={openModal}>
        <Icon name="send" />
        &nbsp;Enviar configurações
      </Button>
      <Modal open={open} dimmer="blurring">
        <Modal.Header>
          <p style={{ width: "100%" }}>
            Selecione um Modal
            <Icon
              name="times"
              link
              style={{ position: "absolute", right: "10px" }}
              onClick={closeModal}
            />
          </p>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={closeModal}>
            <Icon name="remove" />
            Cancelar
          </Button>
          <Button color="green" onClick={closeModal}>
            <Icon name="checkmark" />
            Selecionar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default AOImodal;
