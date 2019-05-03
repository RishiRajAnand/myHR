import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
export default class SalaryHistory extends Component {

  columns = [{
    title: 'Month',
    dataIndex: 'month'
  }, {
    title: 'Basic',
    dataIndex: 'basic'
  }, {
    title: 'HRA',
    dataIndex: 'hra'
  }, {
    title: 'Medical ',
    dataIndex: 'medical'
  }, {
    title: 'Special Allowance',
    dataIndex: 'specialAllowance'
  }, {
    title: 'Extra Payment',
    dataIndex: 'extraPayment'
  }];

  data = [{
    key: '1',
    month: 'April'
  }, {
    key: '2',
    month: 'May'



  }, {
    key: '3',
    month: 'June'



  }, {
    key: '4',
    month: 'July'



  }, {
    key: '5',
    month: 'Aug'



  }, {
    key: '6',
    month: 'Sep'


  }];

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      // All routes will get this by default { match, location, history }
      <div>

        <Row>
          <Col span={20}><h3>Salary Records</h3></Col>
          <Col span={4}><Button>Download</Button></Col>
        </Row>

        <hr />
        <Table columns={this.columns} dataSource={this.data} onChange={this.onChange} />

      </div>
    );
  }
};
