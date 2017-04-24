import React from 'react'

import { connect } from 'react-redux'
import ProjectView from '../components/ProjectView.js'
import {LoadProjectDetails} from '../modules/Project.js'

const mapStateToProps = (state) => ({
    project: state.project
})

const mapDispatchToProps = {
    LoadProjectDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView)