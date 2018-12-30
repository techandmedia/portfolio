import React from "react";
import { Col, Row, Button, Card } from "antd";
import DisplayOffices from "./DisplayOffices";

export default function DisplayCompanyOverview(props) {
  const { isOffice, companyID, company, offices, handleOverViewChange } = props;
  console.log(company);

  return (
    <React.Fragment>
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={16}>
          <Card
            title={company.company_name}
            className="company-style"
            extra={<h3 onClick={() => alert("Tes")}>X</h3>}
            headStyle={{fontSize: 22}}
            style={{position: 'relative'}}
          >
            <p style={{ fontWeight: "bold" }}>Address:</p>
            <p style={{ marginTop: -15 }}>{company.address}</p>

            <p style={{ fontWeight: "bold" }}>Revenue:</p>
            <p style={{ marginTop: -15 }}>{company.revenue}</p>

            <p style={{ fontWeight: "bold" }}>Phone No:</p>
            <p style={{ marginTop: -15 }}>
              ({company.phone_country_code}) {company.phone_number}
            </p>
            <Button onClick={() => handleOverViewChange()} style={{position: 'absolute',  right: 10, bottom: 20}}>
              Back to Overview
            </Button>
          </Card>
        </Col>
      </Row>
      <DisplayOffices offices={offices} companyID={companyID} />
    </React.Fragment>
  );
}
