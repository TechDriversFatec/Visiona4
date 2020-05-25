/* eslint-disable react/jsx-props-no-spreading */
import React, { useState} from "react";
import "./aoiModal.scss"
import { Modal, Icon, Button, Image} from "semantic-ui-react";

const AOImodal = (props) => {
  const setVisible = props.visible
  const [open, setOpen] = useState(setVisible);
  const [close, setClose] = useState(setVisible(false));
  console.log('asdasd', setVisible)

  return (
    <div className="containerAOI">
      <Modal open={setOpen} dimmer="blurring"> 
        <Modal.Header>
          <p style={{ width: "100%" }}>
            Selecione uma Imagem
            <Icon
              name="times"
              link
              style={{ position: "absolute", right: "10px" }}
              onClick={()=> setClose(false)}
            />
          </p>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
          <Image
              wrapped
              size='small'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={()=> setClose(false)}>
            <Icon name="remove" />
            Cancelar
          </Button>
          <Button color="green" onClick={()=> setClose(false)}>
            <Icon name="checkmark" />
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default AOImodal;
