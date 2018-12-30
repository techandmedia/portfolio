import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import "./App.css";

class App extends React.Component {
  state = {
    companiesData: false,
    officeData: false,
  };

  render() {
    const { companiesData } = this.state;

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
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <h2
              style={{
                fontWeight: 500,
                marginLeft: 30
                // marginBottom: -10
              }}
            >
              Companies
            </h2>
          </Col>
        </Row>
        <Row>
          {companiesData ? (
            <Col md={{ span: 8, offset: 4 }}>
              <h2
                style={{
                  fontWeight: 500,
                  marginLeft: 30
                  // marginBottom: -10
                }}
              >
                Companies
              </h2>
            </Col>
          ) : (
            <Col md={{ span: 24, offset: 0 }}>
              <p style={{ marginBottom: 200, textAlign: "center" }}>
                There's no company created yet
              </p>
            </Col>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
