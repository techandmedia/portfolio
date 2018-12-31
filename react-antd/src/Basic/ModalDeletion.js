import React from "react";
import { Modal, Button } from "antd";

function ModalDeletion({
  visible,
  handleModalOk,
  handleModalCancel,
  companyID,
  officeID,
  company,
  office
}) {
  // console.log(companies, offices);
  const {
    company_name,
    address,
    phone_country_code,
    phone_number,
    revenue
  } = company;
  // const { office_name, latitude, log, start_date } = office;
  console.log(company);
  return (
    <div>
      <Modal
        title="Confirm Deletion"
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        {companyID ? (
          <React.Fragment>
            <p style={{ fontSize:22, color: "red" }}>
              You are about to delete the following company
            </p>
            <p>{company_name}</p>
            <p>{address}</p>
            <p>
              ({phone_country_code}) {phone_number}
            </p>
            <p>{revenue}</p>
          </React.Fragment>
        ) : officeID ? (
          <p>Office</p>
        ) : null}
      </Modal>
    </div>
  );
}

export default ModalDeletion;
