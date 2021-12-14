import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Modal, BlockImages, Overlay, Previous, Next, Bollets } from "./styles";
const ModalImage = ({
  handleChangeImage,
  image,
  numImage,
  setShowImage,
  maxFiles,
}) => {
  return (
    <Modal>
      <Bollets>
        {Array.apply(0, Array(maxFiles)).map(function (x, i) {
          return (
            <>
              {i === numImage ? <span key={"modal_show_"+i} className="show"></span> : <span></span>}
            </>
          );
        })}
      </Bollets>
      <BlockImages>
        {console.log(image)}
        <img src={`${image}`} alt={"photo_example_"+numImage} />

        {numImage > 0 && (
          <>
            <Previous onClick={() => handleChangeImage(-1)}>
              <FontAwesomeIcon icon={["fas", "chevron-left"]} />
            </Previous>
          </>
        )}
        {numImage < maxFiles -1 && (
          <>
            <Next onClick={() => handleChangeImage(1)}>
              <FontAwesomeIcon icon={["fas", "chevron-right"]} />
            </Next>
          </>
        )}
      </BlockImages>
      <Overlay onClick={() => setShowImage(false)}></Overlay>
    </Modal>
  );
};

export default ModalImage;
