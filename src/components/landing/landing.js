import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Wrapper from './wrapper/wrapper';
import LeaveBalance from './wrapper/Leave/leave-balance/leave-balance';
import ApplyLeave from './wrapper/Leave/apply-leave/apply-leave';
import AttendanceLogs from './wrapper/Leave/attendance-logs/attendance-logs';
import ShiftPlan from './wrapper/Leave/shift-plan/shift-plan';
import ApplyReimbursement from './wrapper/reimbursement/apply-reimbursement/apply-reimbursement';
import ReimbursementStatus from './wrapper/reimbursement/reimbursement-statuses/reimbursement-statuses';
import HikeHistory from './wrapper/payroll/hikeHistory/hikeHistory';
import Payslips from './wrapper/payroll/payslips/payslips';
import CTCBreakUp from './wrapper/payroll/ctcBreakUp/ctcBreakUp';
import SalaryHistory from './wrapper/payroll/salaryRecords/salaryRecords';
import TaxCalculation from './wrapper/payroll/taxCalculation/taxCalculation'; 

export default class Landing extends Component {
  render() {
    const path = this.props.match.path;
    return (
      // All routes will get this by default { match, location, history }
      <div>
        <Wrapper path={path}>
          <Route path={`${path}/leaveBalance`} component={LeaveBalance} />
          <Route path={`${path}/attendanceLogs`} component={AttendanceLogs} />
          <Route path={`${path}/shiftPlan`} component={ShiftPlan} />
          <Route path={`${path}/applyReimbursement`} component={ApplyReimbursement} />
          <Route path={`${path}/reimbursementStatus`} component={ReimbursementStatus} />
          <Route path={`${path}/payslips`} component={Payslips} />
          <Route path={`${path}/ctcBreakUp`} component={CTCBreakUp} />
          <Route path={`${path}/salaryRecords`} component={SalaryHistory} />
          <Route path={`${path}/hikeHistory`} component={HikeHistory} />
          <Route path={`${path}/taxCalculation`} component={TaxCalculation} />
          <Route path={`${path}/applyLeave`} component={ApplyLeave} />

          {/* /hikeHistory
/ctcBreakUp
/salaryRecords
/taxCalculation
/payslips
/itDeclaration
/extraDeductions */}
        </Wrapper>

      </div>
    );
  }
};

