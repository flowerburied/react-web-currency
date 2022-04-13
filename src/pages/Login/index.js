import { Card, Form, Input, Button, Checkbox, message } from "antd";
import logo from "@/assets/01.jpg";
import "./index.scss";

import { useNavigate } from "react-router-dom";
// 导入共享文件
import { useStore } from "@/store";

function Login() {
  const { loginStore } = useStore();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    await loginStore.getToken({
      // 13811111111
      // 246810
      mobile: values.username,
      code: values.password,
    });

    // // 跳转首页
     navigate("/", { replace: true });
    // 提示用户
    message.success("登录成功");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
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
          <Form.Item
            label="手机号"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "请输入正确的手机号",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              {
                len: 6,
                message: "请输入六位数密码!",
                validateTrigger: "onBlur",
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
      </Card>
    </div>
  );
}

export default Login;
