import React from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView.js'
import {Archieve_Project,ArchiveProjectConfirmed, Add_Project, Project_Details, filterProjects, handleChange, handleMultiSelectChange, handleStartDateChange, handleEndDateChange, handleSubmit,ShowArchieveProjects} from '../modules/home.js'

const mapStateToProps = (state) => ({
    projectsData: state.home
    filteredprojects: state.home.filteredProjects,
    showmodal:state.home.showModal,
    resources: state.home.resources
})

const mapDispatchToProps = {
    Archieve_Project,
    Add_Project,
    Project_Details,
    filterProjects,
    handleChange,
    handleMultiSelectChange,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
     ShowArchieveProjects,
    ArchiveProjectConfirmed

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
