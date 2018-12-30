import React from "react";
import { List, Row, Col, Card } from "antd";
// import { success, error, info, warning } from "../Basic/InformationModal";

class DisplayCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }

  render() {
    const { companies, handleCompanyClick } = this.props;

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={16}>
          <List
            grid={{ gutter: 32, column: 2 }}
            dataSource={companies}
            renderItem={item => (
              <List.Item
                onClick={() => handleCompanyClick({ item })}
              >
                <Card
                  title={item.company_name}
                  className="company-style"
                  extra={<h3 onClick={() => alert("Tes")}>X</h3>}
                >
                  <p style={{ fontWeight: "bold" }}>Address:</p>
                  <p style={{ marginTop: -15 }}>{item.address}</p>

                  <p style={{ fontWeight: "bold" }}>Revenue:</p>
                  <p style={{ marginTop: -15 }}>{item.revenue}</p>

                  <p style={{ fontWeight: "bold" }}>Phone No:</p>
                  <p style={{ marginTop: -15 }}>
                    ({item.phone_country_code}) {item.phone_number}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

export default DisplayCompany;
