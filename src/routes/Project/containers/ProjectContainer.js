import React from 'react'

import { connect } from 'react-redux'
import {ProjectView} from '../components/ProjectView.js'
import {ActionCreator} from '../modules/Project.js'

const mapStateToProps = (state) => ({
    project: state.project
})

const mapDispatchToProps = {
    ActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView)