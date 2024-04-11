import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import { loginUser } from "./service";

const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    loginUser(values)
      .then((data) => {
        if (data) {
          localStorage.setItem("Data", JSON.stringify(data));
          localStorage.setItem("username", values.username);

          Router.push("/home");
        }
      })
      .finally(() => setLoading(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-container">
      <Row
        align="middle"
        justify="space-around"
        className="full-height center width-100"
      >
        <Col span={24} xl={9}>
          <Card align="left">
            <div className="img-logo">
              <img src="images/logo1.jpeg" height="100px"></img>
            </div>
            <Form
              layout="horizontal"
              name="basic"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  size="large"
                  className="full-width"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<KeyOutlined />}
                  size="large"
                  className="full-width"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <div className="login-button">
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    loading={loading}
                  >
                    Login
                  </Button>
                </div>
              </Form.Item>
              {/* <Divider>Or </Divider> */}
              {/* <div className="google-login">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div> */}
              <div></div>

              {/* <Divider>Or</Divider>  */}
              <div className="regi">
                Don't have an account? <a href="/register"> Register now!</a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginComponent;
