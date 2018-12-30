import React from "react";
import { List, Row, Col, Card } from "antd";
// import { success, error, info, warning } from "../Basic/InformationModal";

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
      autoCompleteResult: [],
      dataOffices: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      // const fullName = values.fullName;
      // const address = values.address;
      // const revenue = values.revenue;
      // const phone = values.phone;

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

  componentDidMount() {
    const { companyID, offices } = this.props;
    let data = [];
    offices.map(office => {
      if (companyID === office.company_id) {
        let date = new Date(office.start_date);
        data.push({
          officeID: office.office_id,
          officeName: office.office_name,
          lat: office.latitude,
          log: office.log,
          date:
            date.getMonth() +
            1 +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear()
        });
      }
    });
    this.setState({ dataOffices: data });
  }

  // infoClick() {
  //   info("Fitur ini belum tersedia", "Silahkan kembali lagi nanti");
  // }

  render() {
    const { dataOffices } = this.state;

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={16}>
          <List
            grid={{ gutter: 32, column: 2 }}
            dataSource={dataOffices}
            renderItem={item => (
              <List.Item key={item.officeID}>
                <Card title={item.officeName} className="company-style">
                  <p style={{ fontWeight: "bold" }}>Location:</p>
                  <p style={{ marginTop: -15 }}>Lat: {item.lat}</p>
                  <p style={{ marginTop: -15 }}>Log: {item.log}</p>

                  <p style={{ fontWeight: "bold" }}>Office Start Date:</p>
                  <p style={{ marginTop: -15 }}>{item.date}</p>
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
