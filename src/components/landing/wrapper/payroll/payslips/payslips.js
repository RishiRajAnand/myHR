import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
export default class Payslips extends Component {

  columns = [{
    title: 'Month',
    dataIndex: 'month'
  }, {
    title: 'Gross',
    dataIndex: 'gross'
  }, {
    title: 'Deduction',
    dataIndex: 'deduction'
  }, {
    title: 'TDS',
    dataIndex: 'tds'
  }, {
    title: 'Net',
    dataIndex: 'net'
  }, {
    title: 'Download',
    dataIndex: 'download',
    render: (text, record) => {
      return (
        <div>
          <Button type="dashed">
            Download
        </Button>
        </div>

      );
    },
  }];

  data = [{
    key: '1',
    month: 'Sep 2018',
    gross: 75000,
    deduction: 5000,
    tds: 2000,
    net: 68000

  }, {
    key: '2',
    month: 'Sep 2018',
    gross: 75000,
    deduction: 5000,
    tds: 2000,
    net: 68000

  }, {
    key: '3',
    month: 'Sep 2018',
    gross: 75000,
    deduction: 5000,
    tds: 2000,
    net: 68000

  }, {
    key: '4',
    month: 'Sep 2018',
    gross: 75000,
    deduction: 5000,
    tds: 2000,
    net: 68000

  }];

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      // All routes will get this by default { match, location, history }
      <div>

        <Row>
          <Col span={16}><h3>Payslips</h3></Col>
          <Col span={4}><Button>Show Form-16</Button></Col>
          <Col span={4}><Button>Show Yearly Payslip</Button></Col>
        </Row>

        <hr />
        <Table columns={this.columns} dataSource={this.data} onChange={this.onChange} />

      </div>
    );
  }
};


