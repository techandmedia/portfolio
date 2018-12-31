import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import DisplayCompanies from "./DisplayData/DisplayCompanies";
import DisplayCompanyOverview from "./DisplayData/DisplayCompanyOverview";

import { deleteCompany, deleteOffice } from "./Fetch/DeleteData";
import { getCompanies, getOffices } from "./Fetch/GetData";

import ModalDeletion from "./Basic/ModalDeletion";
import Config from "./Fetch/ConfigData";
import "./App.css";

const URL =
  process.env.NODE_ENV === "production" ? Config.prodURL : Config.devURL;

class App extends React.Component {
  state = {
    isCompany: false,
    companies: [],
    company: {},
    offices: [],
    companyID: 0,
    officeID: 0,
    overView: false,
    visible: false
  };

  // ===============  Life Cycle Hooks ===========================

  componentDidMount() {
    this.getDataCompanies();
    this.getDataOffices();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleStatusAdd();
    if (prevState.status !== this.state.status) {
      this.getDataCompanies();
      this.getDataOffices();
    }
  }

  // =============================================================

  // =========== Get Data from API ===============================

  getDataCompanies = () => {
    getCompanies(URL).then(result => {
      this.setState({
        companies: result.data,
        isCompany: true
      });
    });
    return null;
  };

  getDataOffices = () => {
    getOffices(URL).then(result => {
      this.setState({
        offices: result.data,
        isOffice: true
      });
    });
    return null;
  };

  // ===============================================================

  // =============== Delete Company / Office =======================

  handleOfficeDelete = item => {
    const officeID = item.item.officeID;
    this.setState({
      officeID: officeID,
      companyID: 0
    });
  };

  showModalDeletion = () => {
    const companyID = this.state.companyID;
    const officeID = this.state.officeID;
    console.log(companyID, officeID);
    this.setState({
      visible: true
    });
  };

  handleModalOk = () => {
    const companyID = this.state.companyID;
    const officeID = this.state.officeID;
    if (companyID) {
      deleteCompany(URL, companyID);
      this.setState({ companyID: 0 });
    } else if (officeID) {
      deleteOffice(URL, officeID);
      this.setState({ officeID: 0 });
    }
    this.setState({
      visible: false,
      overView: false,
      isCompany: true
    });
  };

  handleModalCancel = e => {
    this.setState({
      visible: false
    });
  };

  // =============================================================

  // ======== Handle View Change =================================
  // Make individual company

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

  handleOfficeChange = item => {
    
  }

  // =================================================================

  // ========== Check Status =========================================

  handleStatusAdd = code => {
    if (code === 200) {
      this.setState({
        status: !this.state.status
      });
    }
  };

  // =============== Render =============================================

  render() {
    const {
      isCompany,
      companies,
      offices,
      companyID,
      officeID,
      overView,
      company,
      visible
    } = this.state;
    const {
      handleCompanyChange,
      handleStatusAdd,
      handleOverViewChange,
      showModalDeletion,
      handleModalOk,
      handleModalCancel,
      handleOfficeDelete
    } = this;
    // console.log(companies);
    // console.log(offices);

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
            <CreateOffice
              URL={URL}
              offices={offices}
              companies={companies}
              handleStatusAdd={handleStatusAdd}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: -10 }}>
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
              offices={offices}
              handleOverViewChange={handleOverViewChange}
              showModalDeletion={showModalDeletion}
              handleOfficeDelete={handleOfficeDelete}
            />
          ) : isCompany ? (
            <DisplayCompanies
              companies={companies}
              handleCompanyChange={handleCompanyChange}
              showModalDeletion={showModalDeletion}
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
        <ModalDeletion
          visible={visible}
          handleModalOk={handleModalOk}
          handleModalCancel={handleModalCancel}
          companyID={companyID}
          officeID={officeID}
          company={company}
          offices={offices}
        />
      </React.Fragment>
    );
  }
}

export default App;
