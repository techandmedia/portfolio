import React from "react";
import {
  Form,
  Input,
  select_company,
  Row,
  Col,
  Card,
  Checkbox,
  Button,
  Select
} from "antd";
// import { NormalCard as Card } from "../Basic Component/Card";
import { success, error, info, warning } from "../Basic/InformationModal";

// import { registerUser } from "../data/PostData";

const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

class CreateOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: null,
      location: null,
      office_start_date: null,
      password: null,
      select_company: null,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const company_name = values.company_name;
      const location = values.location;
      const email = values.email;
      const password = values.password;
      const role = values.role;

      if (!err) {
        console.log(err);
        // registerUser(
        //   this.props.URL,
        //   company_name,
        //   location,
        //   role,
        //   email,
        //   password
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
        //       "Email sudah terdaftar",
        //       "Pilih login untuk masuk ke dashboard Anda atau gunakan email Account lain"
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

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  infoClick() {
    info("Fitur ini belum tersedia", "Silahkan kembali lagi nanti");
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 8 },
        md: { span: 24 }
      },
      wrapperCol: {
        xs: { span: 4 },
        sm: { span: 8 },
        md: { span: 24 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixselect_companyor = getFieldDecorator("prefix", {
      initialValue: "62"
    })(
      <select_company style={{ width: 70 }}>
        <Option value="62">+62</Option>
        <Option value="61">+61</Option>
      </select_company>
    );

    // const websiteOptions = autoCompleteResult.map(website => (
    //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    // ));

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={24}>
          <Card
            title="Create Office"
            headStyle={{
              fontWeight: 500,
              fontSize: 22,
              color: "#696969"
              // textAlign: "center"
            }}
          >
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label={"Name"}
                className="label-style"
              >
                {getFieldDecorator("company_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your company name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="name" />)}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label={"Location"}
                className="label-style"
              >
                {getFieldDecorator("location", {
                  rules: [
                    {
                      required: true,
                      message: "Please input location!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="location" />)}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label={"Office Start Date"}
                className="label-style"
              >
                {getFieldDecorator("office_start_date", {
                  rules: [
                    {
                      required: true,
                      message: "Please input office start date!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="date" />)}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Company"
                className="label-style"
              >
                {getFieldDecorator("role", {
                  // initialValue: ["Calon Mahasiswa", "Admin"],
                  rules: [
                    {
                      // type: "array",
                      required: true,
                      message: "Harap isi Status/Role Anda!"
                    }
                  ]
                })(
                  <Select placeholder="Pilih Status/Role Anda">
                    <Option value="Admin">Admin</Option>
                    <Option value="Dosen">Dosen</Option>
                    <Option value="Mahasiswa">Mahasiswa</Option>
                    <Option value="Calon Mahasiswa">Calon Mahasiswa</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedCreateOffice = Form.create()(CreateOffice);

export default WrappedCreateOffice;
