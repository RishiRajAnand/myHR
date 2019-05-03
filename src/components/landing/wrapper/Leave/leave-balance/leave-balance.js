import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Table, Divider, Popconfirm, Tag } from 'antd';
import LeaveHistory from './leave-history';
const dataSource = [{
    key: '1',
    type: 'Casual Leave',
    utilised: 4,
    available: 3,
    total: 7
}, {
    key: '2',
    type: 'Sick Leave',
    utilised: 4,
    available: 3,
    total: 7
}, {
    key: '2',
    type: 'Earned Leave',
    utilised: 4,
    available: 3,
    total: 7
}];

const columns = [{
    title: 'Leave Type',
    dataIndex: 'type',
    key: 'type',
}, {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
}, {
    title: 'Utilised',
    dataIndex: 'utilised',
    key: 'utilised',
}, {
    title: 'Available',
    dataIndex: 'available',
    key: 'available',
}, {
    title: 'View policy',
    dataIndex: 'operation',
    render: (text, record) => {
        return (
            <Popconfirm title="See all policy here">
                <a href="javascript:;">View Policy</a>
            </Popconfirm>
        );
    },
}];

export default class LeaveBalance extends Component {
    render() {
        return (
            // All routes will get this by default { match, location, history }
            <div>
                <h3>Leave Balance</h3>
                <hr />
                <Table dataSource={dataSource} columns={columns} />
                <LeaveHistory/>
            </div>
        );
    }
};

