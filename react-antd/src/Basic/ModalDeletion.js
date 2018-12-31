import React from "react";
import { Modal, Button } from "antd";

function ModalDeletion({
  visible,
  handleModalOk,
  handleModalCancel,
  companyID,
  officeID
}) {
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        {companyID ? <p>Company</p> : officeID ? <p>Office</p> : null}
      </Modal>
    </div>
  );
}

export default ModalDeletion;
