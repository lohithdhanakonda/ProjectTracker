import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';

class SubTaskView extends React.Component {
    render() {
        return (
            <div><PageTitle title={this.props.routeParams.subtaskid}></PageTitle></div>
        )
    }
}
export default SubTaskView