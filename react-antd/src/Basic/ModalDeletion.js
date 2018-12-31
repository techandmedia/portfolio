import React from "react";
import { Modal, Button } from "antd";

function ModalDeletion() {
  const {
    visible,
    handleModalOk,
    handleModalCancel,
    companyID,
    officeID
  } = prps;

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default ModalDeletion;
