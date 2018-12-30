import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Card,
  Button,
  Select,
  Cascader,
  DatePicker
} from "antd";
import { success, error, info, warning } from "../Basic/InformationModal";

import { postOffices } from "../Fetch/PostData";

const FormItem = Form.Item;
// const InputGroup = Input.Group;
const Option = Select.Option;

class CreateOffice extends React.Component {
  state = {
    companies: []
  };

  // componentDidMount() {
  //   console.log(this.props.companies);
  //   console.log(this.props.offices);
  //   this.copyDataCompanies();
  // }

  copyDataCompanies = () => {
    this.setState({
      companies: this.props.companies.map(data => ({
        id: data.company_id,
        value: data.company_id,
        label: data.company_name
      }))
    });
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    let length1 = prevProps.companies.length;
    let length2 = this.props.companies.length;
    if (length1 !== length2) {
      this.copyDataCompanies();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
      };
      console.log(values);
      console.log(fieldsValue);
      if (!err) {
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
      info(
        "Error",
        "There's something wrong with the connection, please try again latter"
      );
      console.log(err);
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

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
            <Form layout="vertical" >
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

              <Row gutter={12}>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label={"Location"}
                    className="label-style"
                  >
                    {getFieldDecorator("latitude", {
                      rules: [
                        {
                          required: true,
                          message: "Please input latitude!"
                        }
                      ]
                    })(<Input placeholder="latitude" />)}
                  </FormItem>
                </Col>
                <Col span={12}>
                  {" "}
                  <FormItem {...formItemLayout} label={"."} className="white">
                    {getFieldDecorator("longitude", {
                      rules: [
                        {
                          required: true,
                          message: "Please input longitude!"
                        }
                      ]
                    })(<Input placeholder="longitude" />)}
                  </FormItem>
                </Col>
              </Row>

              <Form.Item {...formItemLayout} label="Office Start Date">
                {getFieldDecorator("date-picker", config)(
                  <DatePicker placeholder="date" />
                )}
              </Form.Item>

              <FormItem {...formItemLayout} label="Company">
                {getFieldDecorator("company_id", {
                  // initialValue: ["Admin"],
                  rules: [
                    {
                      required: true,
                      message: "Please chose a company"
                    }
                  ]
                })(<Cascader options={this.state.companies} />)}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button
                  type="primary"
                  onClick={(e) => this.handleSubmit(e)}
                  style={{ marginBottom: -60 }}
                >
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
