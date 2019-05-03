import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Input, Row, Col, Button, Dropdown, Avatar, Badge } from 'antd';
import LeaveBalance from './Leave/leave-balance/leave-balance';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;
const Search = Input.Search;

export default class Wrapper extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="Leave">
        <Link to={`${this.props.path}/applyLeave`}>Leave</Link>
        </Menu.Item>
        <Menu.Item key="Reimbursement">Reimbursement</Menu.Item>
        <Menu.Item key="Attendance">Attendance</Menu.Item>
      </Menu>
    );

    const credentialsMenu = (
      <Menu>
        <Menu.Item key="Profile">
          <Link to={`${this.props.path}/payslips`}>Profile</Link>
        </Menu.Item>
        <Menu.Item key="Change">
          <Link to={`${this.props.path}/payslips`}>Change password</Link>
        </Menu.Item>
        <Menu.Item key="Email">
          <Link to={`${this.props.path}/payslips`}>Email Settings</Link>
        </Menu.Item>
        <Menu.Item key="Logout">
          <Link to={`${this.props.path}/payslips`}>Logout</Link>
        </Menu.Item>
      </Menu>
    );



    return (
      <Layout>
        <Sider
          // trigger={null}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Leaves</span></span>}
            >
              <Menu.Item key="3"><Link to={`${this.props.path}/attendanceLogs`}>Logs</Link></Menu.Item>
              <Menu.Item key="4"><Link to={`${this.props.path}/leaveBalance`}>Leave Balance</Link></Menu.Item>
              <Menu.Item key="5"><Link to={`${this.props.path}/shiftPlan`}>Shift Plan</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="reimbursement"
              title={<span><Icon type="pie-chart" /><span>Reimbursement</span></span>}
            >
              <Menu.Item key="reimbursement-3"><Link to={`${this.props.path}/applyReimbursement`}>Apply</Link></Menu.Item>
              <Menu.Item key="reimbursement-4"><Link to={`${this.props.path}/reimbursementStatus`}>View status</Link></Menu.Item>

            </SubMenu>
            <SubMenu
              key="payroll"
              title={<span><Icon type="pie-chart" /><span>Payroll</span></span>}
            >
              <Menu.Item key="payslips"><Link to={`${this.props.path}/payslips`}>Payslips</Link></Menu.Item>
              <Menu.Item key="ctc-breakUp"><Link to={`${this.props.path}/ctcBreakUp`}>CTC BreakUp</Link></Menu.Item>
              <Menu.Item key="salaryRecords"><Link to={`${this.props.path}/salaryRecords`}>Salary Records</Link></Menu.Item>
              <Menu.Item key="hikeHistory"><Link to={`${this.props.path}/hikeHistory`}>Hike History</Link></Menu.Item>
              <Menu.Item key="taxCalculation"><Link to={`${this.props.path}/taxCalculation`}>Tax Calculation</Link></Menu.Item>
              <Menu.Item key="itDeclaration"><Link to={`${this.props.path}/itDeclaration`}>IT Declaration</Link></Menu.Item>
              <Menu.Item key="extraDeductions"><Link to={`${this.props.path}/extraDeductions`}>Extra Deductions</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Performance</span></span>}
            >
              <Menu.Item key="6">My Reviews</Menu.Item>
              <Menu.Item key="8">Reviewers Dashboard</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>Streams</span></span>}
            >
              <Menu.Item key="6">Private messages</Menu.Item>
              <Menu.Item key="8">Groups</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="team" /><span>Company</span></span>}
            >
              <Menu.Item key="6">Directory</Menu.Item>
              <Menu.Item key="8">Drive</Menu.Item>
              <Menu.Item key="8">Calender</Menu.Item>
              <Menu.Item key="8">Organisational Structure</Menu.Item>
              <Menu.Item key="8">Reporting Heirarchy</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '10px', lineHeight: '20px' }}>
            <div>
              <Row>
                <Col span={8}>

                  <Search
                    placeholder="Search keywords"
                    onSearch={value => console.log(value)}
                    enterButton
                  />
                </Col>
                <Col span={3} offset={1}>

                  <Dropdown overlay={menu}>
                    <Button>
                      Request <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
                <Col span={3} offset={3}>

                  <div>
                    <span style={{ marginRight: 24 }}>
                      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                    </span>
                    <span>
                      <Badge dot><Avatar shape="square" icon="user" /></Badge>
                    </span>
                  </div>
                </Col>

                <Col span={3}>

                  <Dropdown overlay={credentialsMenu}>
                    <Button>
                      Username <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>

              </Row>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}