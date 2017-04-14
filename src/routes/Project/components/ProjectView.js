import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';

export class ProjectView extends React.Component{
   
    render(){
        return(
            <div><PageTitle title="Project name">Welcome to Project {this.props.params.id}</PageTitle></div>
        )
    }
}
export default ProjectView