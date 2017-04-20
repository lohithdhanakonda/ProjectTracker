import React from 'react'
import { connect } from 'react-redux'
import ProjectView from '../components/ProjectView.js'
import { LoadProjectDetails,handleChange, handleMultiSelectChange, handleStartDateChange, handleEndDateChange, handleEdit, handleSave} from '../modules/project.js'

const mapStateToProps = (state) => ({
     projects: state.project.projects,
    project: state.project.project,
    resources: state.project.resources,
    canEdit: state.project.canEdit
})

const mapDispatchToProps = {
    LoadProjectDetails,
    handleChange,
    handleMultiSelectChange,
    handleStartDateChange,
    handleEndDateChange,
    handleSave,
    handleEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView)
