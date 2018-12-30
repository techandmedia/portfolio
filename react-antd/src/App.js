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
    companyID: 0,
    status: false
  };

  getDataCompanies = () => {
    getCompanies(URL).then(result => {
      this.setState({
        companies: result.data,
        isCompany: true
      });
    });
    // console.log('tes')
    return null;
  };

  componentDidMount() {
    this.getDataCompanies();
    this.getDataOffices();
    console.log(this.state.companies);
  }

  getDataOffices = () => {
    getOffices(URL).then(result => {
      this.setState({
        offices: result.data,
        isOffice: true
      });
    });
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.status);
    this.handleStatusAdd();
    if (prevState.status !== this.state.status) {
      this.getDataCompanies();
    }
  }

  handleCompanyClick = item => {
    this.setState({
      companyID: item.item.company_id
    });
  };

  handleStatusAdd = code => {
    if (code === 200) {
      this.setState({
        status: !this.state.status
      });
    }
  };

  render() {
    const {
      isCompany,
      isOffice,
      companies,
      offices,
      companyID,
      status
    } = this.state;
    const { handleCompanyClick, handleStatusAdd } = this;
    console.log(companies);

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
            <CreateCompany URL={URL} handleStatusAdd={handleStatusAdd} />
          </Col>
          <Col md={{ span: 8, offset: 0 }}>
            <CreateOffice URL={URL} />
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
                status={status}
                URL={URL}
                companies={companies}
                handleCompanyClick={handleCompanyClick}
              />
              {isOffice ? (
                companyID === 0 ? (
                  <Col md={{ span: 24, offset: 0 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginBottom: 200,
                        textAlign: "center"
                      }}
                    >
                      Please Select Company
                    </p>
                  </Col>
                ) : (
                  <DisplayOffices
                    offices={offices}
                    companyID={companyID}
                    key={companyID}
                  />
                )
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
