import React,{ Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormProps } from 'antd/lib/form';


// 定义一个类型别名  
type LoginProps = FormProps
class NormalLoginForm extends Component<LoginProps> {
  handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // '!.' 排除前面对象为空的可能性 否则会报错
    this.props.form!.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form!;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
       
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm

