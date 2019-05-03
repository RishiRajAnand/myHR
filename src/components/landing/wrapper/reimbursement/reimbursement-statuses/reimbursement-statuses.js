import React, { Component } from 'react';
import { Table } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Row, Col } from 'antd';
import { Route, Link } from "react-router-dom";
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

export default class ReimbursementStatus extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }


  columns = [{
    title: 'Title',
    dataIndex: 'title'
  }, {
    title: 'Requested Date',
    dataIndex: 'requestedDate',
    defaultSortOrder: 'descend',
    sorter: (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime(),
  }, {
    title: 'Status',
    dataIndex: 'status',
    filters: [{
      text: 'pending',
      value: 'Pending',
    }, {
      text: 'approved',
      value: 'Approved',
    }, {
      text: 'cancelled',
      value: 'Cancelled',
    }, {
      text: 'expired',
      value: 'Expired',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.address.status - b.address.status,
  }, {
    title: 'View',
    dataIndex: 'view',
    render: (text, record) => {
      return (
        <div>
          <Button type="dashed" onClick={this.showModal}>
            View
        </Button>
        </div>

      );
    },
  }];

  data = [{
    key: '1',
    title: 'John Brown',
    requestedDate: new Date().toDateString(),
    status: 'Pending'
  }, {
    key: '2',
    title: 'Jim Green',
    requestedDate: new Date('12-12-1993').toDateString(),
    status: 'Approved'
  }, {
    key: '3',
    title: 'Joe Black',
    requestedDate: new Date('12-12-1994').toDateString(),
    status: 'Cancelled'
  }, {
    key: '4',
    title: 'Jim Red',
    requestedDate: new Date('12-12-1995').toDateString(),
    status: 'Expired'
  }];

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  render() {
    const panelHeading = <span>
      <Row>
        <Col span={12}>Meal</Col>
        <Col span={12}>5000</Col>
      </Row>
    </span>;
    return (
      <div>
         <h3>Reimbursement History</h3>
         <hr/>
        <Table columns={this.columns} dataSource={this.data} onChange={this.onChange} />
        <Modal
          title="Reimbursement Overview"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: false }}
          cancelButtonProps={{ disabled: false }}
        >
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header={panelHeading} key="1">
              Meal
            </Panel>
            <Panel header={panelHeading} key="2">
              Meal
            </Panel>
            <Panel header={panelHeading} key="3">
              Meal
            </Panel>
          </Collapse>
        </Modal></div>

    );
  }
};