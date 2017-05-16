import React from 'react'
import { connect } from 'react-redux'
import ProjectView from '../components/ProjectView.js'
import { loadProjectDetails,handleChange, handleMultiSelectChange, handleStartDateChange, handleEndDateChange, handleEdit, handleSave} from '../modules/project.js'
import configure from 'react-widgets/lib/configure';

const mapStateToProps = (state) => ({
    project: state.project.project,
    resources: state.project.resources,
    canEdit: state.project.canEdit
})

const mapDispatchToProps = {
    loadProjectDetails,
    handleChange,
    handleMultiSelectChange,
    handleStartDateChange,
    handleEndDateChange,
    handleSave,
    handleEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView)
