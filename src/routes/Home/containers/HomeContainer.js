import React from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView.js'
import {Archieve_Project, Add_Project,ArchiveProjectConfirmed, Project_Details, filterProjects,ShowArchieveProjects} from '../modules/home.js'

const mapStateToProps = (state) => ({
    projectsData: state.home
})

const mapDispatchToProps = {
    Archieve_Project,
    Add_Project,
    Project_Details,
    filterProjects,
    ShowArchieveProjects,
    ArchiveProjectConfirmed
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
