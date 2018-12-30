import React from "react";
import { Row, Col, Card } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import DisplayCompanies from './DisplayData/DisplayCompanies'
import { getCompanies, getOffices } from "./Fetch/GetData";
import { postCompanies, postOffices } from "./Fetch/PostData";
import Config from "./Fetch/ConfigData";
import "./App.css";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    isCompany: false,
    isOffice: false,
    companies: [],
    offices: []
  };

  componentDidMount() {
    getCompanies(URL).then(result => {
      this.setState({
        isCompany: true,
        companies: result.data
      });
      console.log(this.state.companies);
    });
    getOffices(URL).then(result => {
      this.setState({
        isOffice: true,
        offices: result.data
      });
    });
  }

  render() {
    const { isCompany, isOffice, companies, offices } = this.state;

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
          {isCompany ? (
            <DisplayCompanies companies={companies}/>
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
