import React from "react";
import { List,Row, Col, Card } from "antd";
import { success, error, info, warning } from "../Basic/InformationModal";

class DisplayCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      address: null,
      revenue: null,
      phone: null,
      select: null,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const fullName = values.fullName;
      const address = values.address;
      const revenue = values.revenue;
      const phone = values.phone;

      if (!err) {
        console.log(err);
        // registerUser(
        //   this.props.URL,
        //   fullName,
        //   address,
        //   role,
        //   revenue,
        //   phone
        // ).then(res => {
        //   const code = res.data.code;
        //   if (code === 700) {
        //     error("Input Kosong", "Input tidak boleh ada yang kosong");
        //   } else if (code === 200) {
        //     success(
        //       "Anda berhasil mendaftar",
        //       "Silahkan Login untuk masuk ke dashboard Anda"
        //     );
        //   } else if (code === 204) {
        //     warning(
        //       "revenue sudah terdaftar",
        //       "Pilih login untuk masuk ke dashboard Anda atau gunakan revenue Account lain"
        //     );
        //   } else {
        //     info(
        //       "Masalah Koneksi",
        //       "Ada masalah dengan koneksi Anda, harap cek koneksi internet Anda dan ulangi lagi"
        //     );
        //   }
        // });
      }
    });
  };

  infoClick() {
    info("Fitur ini belum tersedia", "Silahkan kembali lagi nanti");
  }

  render() {
    const { companies } = this.props;

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
              <List.Item>
                <Card title={item.company_name} className="company-style">
                  <p style={{ fontWeight: "bold" }}>Address:</p>
                  {/* <br /> */}
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
