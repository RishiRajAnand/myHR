import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
export default class TaxCalculation extends Component {

  columns = [{
    title: 'Particulars',
    dataIndex: 'particulars'
  }, {
    title: 'Amount',
    dataIndex: 'amount'
  }];

  data = [{
    key: '1',
    particulars: '',
    amount: '',
  }, {
    key: '2',
    particulars: '',
    amount: '',



  }, {
    key: '3',
    particulars: '',
    amount: '',



  }, {
    key: '4',
    particulars: '',
    amount: '',



  }, {
    key: '5',
    particulars: '',
    amount: '',



  }, {
    key: '6',
    particulars: '',
    amount: '',


  }];

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      // All routes will get this by default { match, location, history }
      <div>

        <Row>
          <Col span={20}><h3>Hike History</h3></Col>
          <Col span={4}><Button>Download</Button></Col>
        </Row>

        <hr />
        <Table columns={this.columns} dataSource={this.data} onChange={this.onChange} />

      </div>
    );
  }
};
