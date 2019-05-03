import React from 'react';
import { Card } from 'antd';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

// import { Menu, MenuItem, Button, ButtonGroup, AnchorButton, Popover, Position } from "@blueprintjs/core";
// import { Link } from "react-router-dom";
const FormItem = Form.Item;


export default class LoginComponent extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <div className="container">
                <Card
                    title="Registration Form"
                    // extra={<a href="#">More</a>}
                    style={{ width: 300 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="Name">
                            <Input />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Age">
                            <Input />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Gender">
                            <Input />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="E-mail">
                            <Input />
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}