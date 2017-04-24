import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';
import './ProjectHomeStyles.scss'
import { Link, browserHistory } from 'react-router'

class ProjectView extends React.Component {
    componentDidMount() {
        this.props.LoadProjectDetails(this.props.routeParams.projectid)
    }
    render() {
        return (
            <div>
                <PageTitle title={this.props.project.project.name}></PageTitle>
                <div>
                    {this.props
                        && this.props.project
                        && this.props.project.project
                        && this.props.project.project.maintasks
                        ? this.props.project.project.maintasks.map((task) => (
                            <span><a onClick={()=>browserHistory.push('/maintask/'+this.props.project.project.id+'/'+task.id)}>{task.name}</a><br /></span>
                        )) : null}
                </div>
                <div></div>
            </div>
        )
    }
}
export default ProjectView
