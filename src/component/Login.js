import React from "react";
import { Form, Input, Button, Checkbox, Col } from "antd";
import "../style/login.css";
import { useUser } from "../contexts/UserContext";
import { userService } from "../services/userService";
export default function Login() {
  const { user, setUser } = useUser();
  const onFinish = (values) => {
    setLoading(true);
    // console.log("Success:", values);
    userService
      .loginUser(values)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          console.log(res);
          setUser({
            name: res.data.name,
            email: res.data.email,
            address: res.data.address,
            id: res.data.id,
            phone: res.data.phone,
            token: res.token,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="login-right">
        <p>a</p>
        <Form
          className="loginForm"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Col className="form-title" span={24}>
            <img src="pictures/logo.svg" alt="" />
            <h1 span={24}>MStars Food Delivery</h1>
          </Col>
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
