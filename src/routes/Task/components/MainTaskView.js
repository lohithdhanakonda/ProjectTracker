import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';

class MainTaskView extends React.Component {
     componentDidMount() {
        this.props.LoadTaskDetails(this.props.routeParams.projectid,this.props.routeParams.taskid)
    }
    render() {
        return (
            <div><PageTitle title={this.props.task.taskdata.name}></PageTitle></div>
        )
    }
}
export default MainTaskView