import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'
import './index.css'


export default function Index() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem('username', values.username)
        navigate('/home')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='form-container'>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="登录系统"
                    labelCol={{span: 13}}
                >
                </Form.Item>
                <Form.Item
                    label="用户："
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码："
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 10,
                        span: 5,
                    }}
                >
                    <Checkbox>记住选项</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 5,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
