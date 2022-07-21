import { Button, Checkbox, Col, Form, Input, Row , InputNumber} from 'antd';
import React from 'react';

const Signin = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col>
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
                        label="Ten san pham"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Tên sản phẩm không dược để trống',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Giá gốc"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Giá sản phẩm không được để  trống!',
                            },
                        ]}
                    >
                        <InputNumber.Password />
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
                            Tạo sản phẩm
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Signin;