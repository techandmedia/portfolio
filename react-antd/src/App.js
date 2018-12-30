import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import DisplayCompanies from "./DisplayData/DisplayCompanies";
import DisplayCompanyOverview from "./DisplayData/DisplayCompanyOverview";
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
    company: {},
    offices: [],
    companyID: 0,
    status: false,
    overView: false
  };

  getDataCompanies = () => {
    getCompanies(URL).then(result => {
      this.setState({
        companies: result.data,
        isCompany: true
      });
    });
    return null;
  };

  componentDidMount() {
    this.getDataCompanies();
    this.getDataOffices();
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
    this.handleStatusAdd();
    if (prevState.status !== this.state.status) {
      this.getDataCompanies();
    }
  }

  handleCompanyChange = item => {
    this.setState({
      companyID: item.item.company_id,
      isOffice: true,
      isCompany: false,
      overView: true,
      company: {
        company_id: item.item.company_id,
        company_name: item.item.company_name,
        address: item.item.address,
        phone_country_code: item.item.phone_country_code,
        phone_number: item.item.phone_number,
        revenue: item.item.revenue
      }
    });
  };

  handleOverViewChange = () => {
    // console.log(number)
    this.setState({
      isOffice: true,
      isCompany: true,
      companyID: 0,
      overView: false
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
      status,
      overView,
      company
    } = this.state;
    const { handleCompanyChange, handleStatusAdd, handleOverViewChange } = this;

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
        <Row style={{marginBottom: -10}}>
          <Col md={{ span: 8, offset: 4 }}>
            <h2
              style={{
                fontWeight: 500,
                marginLeft: 30
              }}
            >
              Companies
            </h2>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: 30,
                marginTop: -10
              }}
            >
              Please Select a Company
            </p>
          </Col>
        </Row>
        <Row>
          {overView ? (
            <DisplayCompanyOverview
              companyID={companyID}
              company={company}
              isOffice={isOffice}
              offices={offices}
              handleOverViewChange={handleOverViewChange}
            />
          ) : isCompany ? (
            <DisplayCompanies
              isOffice={isOffice}
              companyID={companyID}
              offices={offices}
              status={status}
              URL={URL}
              companies={companies}
              handleCompanyChange={handleCompanyChange}
            />
          ) : (
            <Col md={{ span: 24, offset: 0 }}>
              <p
                style={{
                  marginTop: 10,
                  marginBottom: 200,
                  fontSize: 20,
                  fontWeight: 500,
                  color: "violet",
                  textAlign: "center"
                }}
              >
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
