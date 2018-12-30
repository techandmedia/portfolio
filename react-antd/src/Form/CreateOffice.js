import React from "react";
import { Form, Input, Row, Col, Card, Button, Select, Cascader } from "antd";
// import { success, error, info, warning } from "../Basic/InformationModal";

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
    // this.handleStatusAdd();
    let length1 = prevProps.companies.length
    let length2 = this.props.companies.length
    // console.log("prevProps", prevProps.companies.length)
    // console.log("thisProps", this.props.companies.length)
    if (length1 !== length2) {
      this.copyDataCompanies();
    }
    console.log("prevState", prevState)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      // const company_name = values.company_name;
      // const location = values.location;
      // const email = values.email;
      // const password = values.password;
      // const role = values.role;

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

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { URL, offices } = this.props;
    // console.log(URL, offices);
    console.log(this.state.companies);

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
                  htmlType="submit"
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
