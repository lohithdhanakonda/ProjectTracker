import React from 'react';
import { connect } from 'react-redux'
import MainTaskView from '../components/MainTaskView'
import {LoadTaskDetails} from '../modules/maintask.js'
const mapStateToProps = (state) => ({
    task: state.maintask
})

const mapDispatchToProps = {
    LoadTaskDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTaskView)