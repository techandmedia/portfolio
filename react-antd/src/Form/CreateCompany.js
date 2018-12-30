import React from "react";
import { Form, Input, Select, Row, Col, Card, Button } from "antd";
// import { success, error, info, warning } from "../Basic/InformationModal";

// import { registerUser } from "../data/PostData";

const FormItem = Form.Item;
const Option = Select.Option;

class CreateCompany extends React.Component {
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
      // const fullName = values.fullName;
      // const address = values.address;
      // const revenue = values.revenue;
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

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // infoClick() {
  //   info("Fitur ini belum tersedia", "Silahkan kembali lagi nanti");
  // }

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

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "62"
    })(
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
        <Option value="61">+61</Option>
      </Select>
    );

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={24}>
          <Card
            title="Create Company"
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
                {getFieldDecorator("fullName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your full name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="name" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label={"Address"}
                className="label-style"
              >
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your address!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="address" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Revenue"
                className="label-style"
              >
                {getFieldDecorator("revenue", {
                  rules: [
                    {
                      type: "revenue",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your revenue!"
                    }
                  ]
                })(<Input placeholder="revenue" />)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Phone Number"
                className="label-style"
              >
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder="Nomor Anda tidak akan disimpan, fitur ini belum tersedia"
                  />
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

const WrappedCreateCompany = Form.create()(CreateCompany);

export default WrappedCreateCompany;
