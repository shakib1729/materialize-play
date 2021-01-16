import React from 'react';
import { Button, Modal } from 'react-materialize';
const ModalPage = () => {
  const trigger = <Button>Open Modal</Button>;
  return (
    <Modal header='Modal Header' trigger={trigger}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Modal>
  );
};

export default ModalPage;
