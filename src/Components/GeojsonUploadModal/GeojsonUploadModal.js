/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from "react";
import { Modal, Icon, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateGeoJson } from "../../action";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  minHeight: "250px",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const GeojsonUploadModal = props => {
  const [open, setOpen] = useState(false);
  const { updateGeoJson } = props;
  const [geojson, setGeojson] = useState();
  const closeModal = () => {
    setOpen(false);
    setGeojson(undefined);
  };
  const openModal = () => setOpen(true);

  const extractJson = file => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = e => {
          resolve(JSON.parse(e.target.result));
        };
        reader.readAsText(file);
      } catch (error) {
        reject(error);
      }
    });
  };

  const validateGeojson = json => {
    return json.type === "FeatureCollection" && Array.isArray(json.features);
  };

  const getGeoJson = async files => {
    const file = files.pop();
    const json = await extractJson(file);
    if (validateGeojson(json)) setGeojson(json);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: ".json,application/json,.geojson",
    multiple: false,
    onDrop: getGeoJson,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const sendGeoJSON = () => {
    if (!geojson) return;
    updateGeoJson(geojson);
    closeModal()
  };

  return (
    <div>
      <Button icon color="grey" onClick={openModal}>
        <Icon name="upload" />
        &nbsp;Carregar GeoJSON
      </Button>
      <Modal open={open} dimmer="blurring">
        <Modal.Header>
          <p style={{ width: "100%" }}>
            Envie um Geojson
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
            {(() => {
              if (geojson) {
                return (
                  <pre>
                    <p>{JSON.stringify(geojson, null, 2)}</p>
                  </pre>
                );
              }
              return (
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p>Jogue seu arquivo ou clique aqui!</p>
                </div>
              );
            })()}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={closeModal}>
            <Icon name="remove" />
            Cancelar
          </Button>
          <Button color="green" onClick={sendGeoJSON}>
            <Icon name="checkmark" />
            Enviar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
const mapStateToProps = store => ({
  geoJSON: store.geoJSONState.geoJSON,
});
const mapDispatchToProps = dispatch => bindActionCreators({ updateGeoJson }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GeojsonUploadModal);
