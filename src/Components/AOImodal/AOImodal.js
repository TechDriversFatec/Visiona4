/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect} from "react";
import "./aoiModal.scss"
import { Modal, Icon, Button, Image, Segment, Dimmer, Loader} from "semantic-ui-react";

const axios = require('axios');

const apiUrl = process.env.REACT_APP_API_URL;

const AOImodal = (props) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState('')

  const close = () => setOpen(false)

  const openModal = () => {
    setOpen(true)
  }

  function sendCoords() {
    setLoading(true)
    const url = `${apiUrl}/api/v1/download`
    const coords = {"coords": `${props.coords}`}
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  })

    axios({
      method: 'get',
      url,
      headers,
      params: coords
    })
    .then(response => {
      setLoading(false)
      const {status} = response
      if (status === 200) {
        console.log("completo")
      }
    })
    .catch(error => {
      console.log(JSON.stringify(error))
    });
  }

  function Loading() {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size='medium'>Enviando</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    )
  }

  function Success() {
    const {location} = window
    return(
      <div>
        <Modal.Content>
          <span id="question" style={{display: 'flex', justifyContent: 'center', fontSize:20}}>
            Imagem enviada com sucesso!
          </span>
        </Modal.Content>
        <Modal.Actions id="buttons" style={{display:'flex', justifyContent: 'center', marginTop:'30px'}}>
          <Button
            color="green"
            onClick={() => location.reload()}
          >
            <Icon name="checkmark" />
            Ok
          </Button>
        </Modal.Actions>
      </div>
    )
  }

  function Validating() {
    if (loading === true) {
      document.getElementById('question').style.display = "none";
      return (
        Loading()
      )
    }

    if (loading === false) {
      document.getElementById('buttons').style.display = "none";
      return(
        Success()
      )
    }
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
            <span style={{marginLeft: "45%"}}>Atenção</span>
            <Icon
              name="times"
              link
              style={{ position: "absolute", right: "10px" }}
              onClick={props.onClose}
            />
          </p>
        </Modal.Header>
        <Modal.Content>
          <span id="question" style={{display: 'flex', justifyContent: 'center', fontSize:20}}>
            Deseja enviar essa área de interesse?
          </span>
          {Validating()}
        </Modal.Content>
        <Modal.Actions id="buttons">
          <Button color="red" onClick={props.onClose}>
            <Icon name="remove" />
            Cancelar
          </Button>
          <Button color="green" onClick={() => sendCoords()}>
            <Icon name="checkmark" />
            Confirmar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default AOImodal;
