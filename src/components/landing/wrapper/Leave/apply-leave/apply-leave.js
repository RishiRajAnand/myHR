import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Card, Icon, Select, Upload, message, Button, Row, Col, Form, Input, DatePicker } from 'antd';
const { Option, OptGroup } = Select;
const FormItem = Form.Item;
const gridStyle = {
    width: '100%',
    textAlign: 'center',
};
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class ApplyLeave extends Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        const path = this.props.match.path;
        return (
            <div>
                <h3>Apply Leave</h3>
                <hr />
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <FormItem
                                    label="Select Date Range"
                                >
                                    <RangePicker onChange={this.onChange} />
                                </FormItem>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

