/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect} from "react";
import "./aoiModal.scss"
import { Modal, Icon, Button, Image} from "semantic-ui-react";

const AOImodal = (props) => {
  const [open, setOpen] = useState(false)
  
  const close = () => setOpen(false)

  const openModal = () => {
    setOpen(true)
  } 

  useEffect(()=>{
    if (props.visible){
      openModal()
    } else{
      close()
    }
  },[props.visible])

  return (
    <div className="containerAOI">
      <Modal open={open} dimmer="blurring"> 
        <Modal.Header>
          <p style={{ width: "100%" }}>
            Selecione uma Imagem
            <Icon
              name="times"
              link
              style={{ position: "absolute", right: "10px" }}
              onClick={props.onClose}
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
          <Button color="red" onClick={props.onClose}>
            <Icon name="remove" />
            Cancelar
          </Button>
          <Button color="green" onClick={props.onClose}>
            <Icon name="checkmark" />
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default AOImodal;
