import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
export default class HikeHistory extends Component {

  columns = [{
    title: 'Date of Hike',
    dataIndex: 'dateOfHike'
  }, {
    title: 'Type',
    dataIndex: 'typeOfHike'
  }, {
    title: 'CTC',
    dataIndex: 'ctc'
  }, {
    title: 'Salary Structure ',
    dataIndex: 'salaryStructure'
  }, {
    title: 'Designation',
    dataIndex: 'designation'
  }];

  data = [{
    key: '1',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',
  }, {
    key: '2',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',



  }, {
    key: '3',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',



  }, {
    key: '4',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',



  }, {
    key: '5',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',



  }, {
    key: '6',
    dateOfHike: (new Date()).toDateString(),
    typeOfHike: 'Band Change',
    ctc: 900000,
    salaryStructure: 'Erx',
    designation: 'Software Developer',


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
