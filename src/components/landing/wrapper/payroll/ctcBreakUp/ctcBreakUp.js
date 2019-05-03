import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
export default class CTCBreakUp extends Component {

  columns = [{
    title: 'Type',
    dataIndex: 'type'
  }, {
    title: 'Annual',
    dataIndex: 'annual'
  }, {
    title: 'Monthly',
    dataIndex: 'monthly'
  }];

  data = [{
    key: '1',
    type: 'Basic',
    annual: 35000,
    monthly: 12000,

  }, {
    key: '2',
    type: 'HRA',
    annual: 35000,
    monthly: 12000,

  }, {
    key: '3',
    type: 'Conveyance',
    annual: 35000,
    monthly: 12000,

  }, {
    key: '4',
    type: 'Medical',
    annual: 35000,
    monthly: 12000,

  },{
    key: '4',
    type: 'Special Allowance',
    annual: 35000,
    monthly: 12000,

  },{
    key: '4',
    type: 'Total',
    annual: 900000,
    monthly: 75000,
  }];

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      // All routes will get this by default { match, location, history }
      <div>

        <Row>
          <Col span={20}><h3>CTC Break-Up</h3></Col>
          <Col span={4}><Button>Download</Button></Col>
        </Row>

        <hr />
        <Table columns={this.columns} dataSource={this.data} onChange={this.onChange} />

      </div>
    );
  }
};
