import React from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView.js'
import {Drag_Project, Add_Project, Project_Details, filterProjects} from '../modules/home.js'

const mapStateToProps = (state) => ({
    projects: state.home.projects,
    filteredprojects: state.home.filteredProjects
})

const mapDispatchToProps = {
    Drag_Project,
    Add_Project,
    Project_Details,
    filterProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)