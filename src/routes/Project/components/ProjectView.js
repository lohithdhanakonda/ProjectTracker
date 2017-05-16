import React from 'react';
import '../styles/ProjectStyles.scss';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import './ProjectHomeStyles.scss';
import { Link, browserHistory } from 'react-router';
import {form, FormGroup, ControlLabel, FormControl, Modal, Checkbox} from 'react-bootstrap';
import 'react-date-picker/index.css';
import { DateField } from 'react-date-picker';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import  '../../../styles/widgetStyles.scss';
import Select from 'react-select';

const DATEFORMAT = 'YYYY/MM/DD'

export default class ProjectView extends React.Component {
    componentDidMount() {
        let id = this.props.params.projectid;
        this.props.loadProjectDetails(id);
    }

    render() {
        return (
            <div>
                <PageTitle title={this.props.project.name}></PageTitle>
                <form key={this.props.project.id}>
                    <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Project Name" name="name" onChange={this.props.handleChange} defaultValue={this.props.project.name} disabled="true" />
                    </FormGroup>
                    <FormGroup controlId="client_name">
                        <ControlLabel>Client Name</ControlLabel>
                        <FormControl type="text" placeholder="Client Name" name="clientname" onChange={this.props.handleChange} defaultValue={this.props.project.clientname} disabled="true" />
                    </FormGroup>
                    <FormGroup controlId="status">
                        <Checkbox inline name="status" onChange={this.props.handleChange} defaultChecked={this.props.project.status==0? false : true} disabled={!this.props.canEdit}>Project Archive</Checkbox>
                    </FormGroup>
                    <FormGroup controlId="employees">
                        <ControlLabel>Employees</ControlLabel>
                          <Select multi  value={this.props.project.resources} placeholder="Select Resources" options={this.props.resources} onChange={this.props.handleMultiSelectChange} labelKey='name' valueKey='id' disabled={!this.props.canEdit}/>
                    </FormGroup>
                    <div >
                        <FormGroup controlId="start_date">
                            <div>
                                <ControlLabel>Start Date:</ControlLabel>
                            </div>
                            <DateTimePicker time={false} onChange={this.props.handleStartDateChange} value={this.props.project.startDate} disabled={!this.props.canEdit}/>
                        </FormGroup>
                        <FormGroup controlId="end_date">
                            <div>
                                <ControlLabel>Expected End Date:</ControlLabel>
                            </div>
                            <DateTimePicker time={false} onChange={this.props.handleEndDateChange} value={this.props.project.endDate} disabled={!this.props.canEdit}/>
                        </FormGroup>
                    </div>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={this.props.handleChange} defaultValue={this.props.project.description} disabled={!this.props.canEdit} />
                    </FormGroup>
                    <div >{
                        this.props.canEdit ? <span className='splitButton'><button type="button" className='btn btn-primary btn-large'>Save</button></span> : <span className='splitButton'><button type="button" className='btn btn-primary btn-large' onClick={this.props.handleEdit}>Edit</button></span>
                    }
                    </div>
                </form>
                <div>
                    {this.props
                        && this.props.project
                        && this.props.project.project
                        && this.props.project.project.maintasks
                        ? this.props.project.project.maintasks.map((task) => (
                            <span><a onClick={() => browserHistory.push('/maintask/' + this.props.project.project.id + '/' + task.id)}>{task.name}</a><br /></span>
                        )) : null}
                </div>
            </div>
        )
    }
}
 
