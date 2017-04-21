import React from 'react';
import {connect} from 'react-redux'
import EmployeeView from '../components/EmployeeView'
import {LoadEmployeeData} from '../modules/employee.js'
const mapStateToProps = (state) => ({employees: state.employee.employees})

const mapDispatchToProps = {
    LoadEmployeeData
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView)