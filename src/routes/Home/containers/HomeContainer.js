import React from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView.js'
import {Drag_Project, Add_Project, Project_Details, filterProjects, handleChange, handleMultiSelectChange, handleStartDateChange, handleEndDateChange, handleSubmit} from '../modules/home.js'

const mapStateToProps = (state) => ({
    projects: state.home.projects,
    filteredprojects: state.home.filteredProjects,
    project: state.home.project,
    showmodal:state.home.showModal,
    resources: state.home.resources
})

const mapDispatchToProps = {
    Drag_Project,
    Add_Project,
    Project_Details,
    filterProjects,
    handleChange,
    handleMultiSelectChange,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
