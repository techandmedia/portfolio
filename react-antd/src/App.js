import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import DisplayCompanies from "./DisplayData/DisplayCompanies";
import DisplayOffices from "./DisplayData/DisplayOffices";
// import DisplayOffices from './WithHooks/DisplayOffices'
import { getCompanies, getOffices } from "./Fetch/GetData";
// import { postCompanies, postOffices } from "./Fetch/PostData";
import Config from "./Fetch/ConfigData";
import "./App.css";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    isCompany: false,
    isOffice: false,
    companies: [],
    offices: [],
    companyID: null
  };

  componentDidMount() {
    getCompanies(URL).then(result => {
      this.setState({
        isCompany: true,
        companies: result.data
      });
    });
    getOffices(URL).then(result => {
      this.setState({
        isOffice: true,
        offices: result.data
      });
    });
  }

  handleCompanyClick = item => {
    this.setState({
      companyID: item.item.company_id
    });
  };

  render() {
    const { isCompany, isOffice, companies, offices, companyID } = this.state;
    const { handleCompanyClick } = this;

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
            <React.Fragment>
              <DisplayCompanies
                companies={companies}
                handleCompanyClick={handleCompanyClick}
              />
              {isOffice ? (
                <DisplayOffices
                  offices={offices}
                  companyID={companyID}
                  key={companyID}
                />
              ) : (
                <Col md={{ span: 24, offset: 0 }}>
                  <p style={{ marginBottom: 200, textAlign: "center" }}>
                    There's no offices created yet
                  </p>
                </Col>
              )}
            </React.Fragment>
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
