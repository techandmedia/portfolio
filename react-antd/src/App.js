import React from "react";
import { Row, Col } from "antd";
import CreateCompany from "./Form/CreateCompany";
import CreateOffice from "./Form/CreateOffice";
import DisplayCompanies from "./DisplayData/DisplayCompanies";
import DisplayCompanyOverview from "./DisplayData/DisplayCompanyOverview";

import { deleteCompany, deleteOffice, deleteBranch } from "./Fetch/DeleteData";
import { getCompanies, getOffices } from "./Fetch/GetData";

import ModalDeletion from "./Basic/ModalDeletion";
import { info, success } from "./Basic/InformationModal";
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
    office: {},
    companyID: 0,
    officeID: 0,
    overView: false,
    visible: false,
    status: false
  };

  // Binding function in onClick or onSubmit

  // Take note: this create new function and cause React to
  // re render each time this function got called
  // onClick={() => handleClick({ item })}
  // onClick={(e) => handleClick(e)}
  // if you don't need to pass an argument, just called like this:
  // onClick={handleCompanyChange}
  // if you need the argument, then bind with this
  // onClick={handleCompanyChange.bind(this,{ item })}
  // if you need to receive an event(e), call it like this
  // this.handleSubmit.bind(this)}
  // if it's a props
  // onClick={props.handleSubmit.bind(this)}
  // or with destructuring
  // onClick={handleSubmit.bind(this)}

  // ===============  Life Cycle Hooks ===========================

  componentDidMount() {
    this.getDataCompanies();
    this.getDataOffices();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState.status", prevState.status);
    // console.log("thisstate.status", this.state.status);
    this.handleUpdateChange();
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
    // console.log(item);
    let data = item.item;
    const officeID = item.item.officeID;
    // ====== Make Individual Office ==============
    this.setState({
      officeID: officeID,
      companyID: 0,
      office: {
        officeName: data.officeName,
        lat: data.lat,
        log: data.log,
        date: data.date
      }
    });
  };

  showModalDeletion = () => {
    // const companyID = this.state.companyID;
    // const officeID = this.state.officeID;
    // console.log(companyID, officeID);
    this.setState({
      visible: true
    });
  };

  handleModalOk = () => {
    const companyID = this.state.companyID;
    const officeID = this.state.officeID;
    if (companyID) {
      deleteCompany(URL, companyID).then(res => {
        const code = res.data.code;
        if (code === 200) {
          this.handleUpdateChange(code);
          success("Success", "You have succesfully deleted a company!");
          deleteBranch(URL, companyID);
          this.setState({ companyID: 0 });
        } else {
          info("Info", "Deletion failed. Check your connection!");
        }
      });
    } else if (officeID) {
      deleteOffice(URL, officeID).then(res => {
        const code = res.data.code;
        if (code === 200) {
          this.handleUpdateChange(code);
          success("Success", "You have succesfully deleted a office!");
          this.setState({ officeID: 0, overView: true });
        } else {
          info("Info", "Deletion failed. Check your connection!");
        }
      });
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
    // console.log(item)
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

  handleStayInOverview = () => {
    this.setState({
      // isOffice: true,
      overView: false
    });
  };
  // =================================================================

  // ====== Check Status (Add, Delete, Update) =======================

  handleUpdateChange = code => {
    if (code === 200) {
      this.setState({
        status: !this.state.status
      });
    }
  };

  // =============== Render ===========================================

  render() {
    const {
      isCompany,
      companies,
      offices,
      companyID,
      officeID,
      overView,
      company,
      office,
      visible
    } = this.state;
    const {
      handleCompanyChange,
      handleUpdateChange,
      handleOverViewChange,
      showModalDeletion,
      handleModalOk,
      handleModalCancel,
      handleOfficeDelete,
      handleStayInOverview
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
            <CreateCompany
              URL={URL}
              handleUpdateChange={handleUpdateChange}
              handleStayInOverview={handleStayInOverview}
              overView={overView}
            />
          </Col>
          <Col md={{ span: 8, offset: 0 }}>
            <CreateOffice
              URL={URL}
              offices={offices}
              companies={companies}
              handleUpdateChange={handleUpdateChange}
              handleStayInOverview={handleStayInOverview}
              overView={overView}
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
          office={office}
        />
      </React.Fragment>
    );
  }
}

export default App;
