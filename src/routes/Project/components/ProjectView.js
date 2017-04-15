import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Link, browserHistory } from 'react-router'

class ProjectView extends React.Component{
    componentDidMount(){
        this.props.LoadProjectDetails(this.props.routeParams.projectid)
    }
render(){
    return (
        <div>
        <PageTitle title="Project name"></PageTitle>
        <div>
        {this.props 
            && this.props.project 
            && this.props.project.project 
            && this.props.project.project.length>0 
            && this.props.project.project[0].maintasks 
            ? this.props.project.project[0].maintasks.map((proj)=>(
               <span> <span>{proj.name}</span><br /></span>
            )):null}
        </div>
        <div></div>
            </div>
    )
}
}
export default ProjectView