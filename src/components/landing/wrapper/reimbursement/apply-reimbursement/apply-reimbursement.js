import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Card, Icon, Select, Upload, message, Button, Row, Col, Form, Input } from 'antd';
const { Option, OptGroup } = Select;
const FormItem = Form.Item;
const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class ApplyReimbursement extends Component {


    render() {
        // const { getFieldDecorator } = this.props.form;
        const uploadProps = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        const cardTitle = <span>
            Select a Type
        <Select
                defaultValue="Meals"
                style={{ width: 200 }}
                onChange={handleChange}
            >
                <OptGroup label="Work Travel">
                    <Option value="Rail">Rail</Option>
                    <Option value="Flight">Flight</Option>
                    <Option value="Bus">Bus</Option>
                    <Option value="Cab">Cab</Option>
                </OptGroup>
                <OptGroup label="General Expenses">
                    <Option value="Meals">Meals</Option>
                    <Option value="Recreational">Recreational activities</Option>
                    <Option value="Supplies">Office Supplies</Option>
                    <Option value="Gadgets">Gadgets and Accessories</Option>
                    <Option value="Maintainance">Office and Maintainance</Option>
                    <Option value="Miscellaneaous">Miscellaneaous</Option>
                </OptGroup>
                <OptGroup label="Custom">
                    <Option value="General">General</Option>
                </OptGroup>
            </Select>
        </span>

        return (
            // All routes will get this by default { match, location, history }
            <div>
                <h3>Apply Reimbursement</h3>
                <hr />
                <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
                    <Icon type="plus" /> Add Reimbursement
          </Button>
                <Card title={cardTitle}>
                    <Card.Grid style={gridStyle}>
                        <Form onSubmit={this.handleSubmit}>

                        </Form>
                        <div className="gutter-example">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Date of Journey"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Class"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Source"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Destination"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Travel Company"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Particulars"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Remarks"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <FormItem
                                            label="Amount"
                                        >
                                            <Input />
                                        </FormItem>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" offset={18} span={6}>
                                    <div className="gutter-box">
                                        <Upload {...uploadProps}>
                                            <Button>
                                                <Icon type="upload" />
                                                Attach Bills
                                                </Button>
                                        </Upload>,
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Card.Grid>
                </Card>
                <Row gutter={16}>
                    <Col className="gutter-row" offset={20} span={4}>
                        <div className="gutter-box">
                            <Button type="primary" size="large">Send Request</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
};