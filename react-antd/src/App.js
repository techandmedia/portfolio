import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from './Form/CreateOffice'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h2
        style={{
          fontWeight: 500,
          textAlign: "center",
          marginTop: 30,
          marginBottom: -10
        }}
      >
        COMPANY INFORMATION MANAGEMENT FORM
      </h2>
      <Row>
        <Col md={{ span: 8, offset: 4 }}>
          <CreateCompany />
        </Col>
        <Col md={{ span: 8, offset: 0 }}>
          <CreateOffice />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default App;
