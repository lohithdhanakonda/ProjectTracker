import React from 'react';
import '../styles/ProjectStyles.scss';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import './ProjectHomeStyles.scss'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';
import {form, FormGroup, ControlLabel, FormControl, Modal, Checkbox} from 'react-bootstrap';



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
                <form  key={this.props.project.id}>
                    <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Project Name" name="name" onChange={this.props.handleChange.bind(this)} defaultValue={this.props.project.name}  disabled="true"/>
                    </FormGroup>
                     <FormGroup controlId="client_name">
                        <ControlLabel>Client Name</ControlLabel>
                        <FormControl type="text" placeholder="Client Name" name="clientname" onChange={this.props.handleChange.bind(this)} defaultValue={this.props.project.clientname} disabled="true"/>
                    </FormGroup>
                       <FormGroup controlId="status">
                          <Checkbox inline name="status" onChange={this.props.handleChange.bind(this)} defaultValue={this.props.project.status}  disabled={this.props.canEdit?false:true}>Project Archive</Checkbox>
                          </FormGroup>
                    <FormGroup controlId="employees">
                        <ControlLabel>Employees</ControlLabel>
                        <FormControl componentClass="select" multiple onChange={this.props.handleMultiSelectChange.bind(this)}  defaultValue={this.props.project.resources} disabled={this.props.canEdit?false:true}>
                            {
                                this.props.resources.map((resource) => <option key={resource.id} value={resource.id} id={resource.id}>{resource.name}</option>)
                            }
                        </FormControl>
                    </FormGroup>
                    <div >
                    <FormGroup controlId="start_date">
                        <div>
                        <ControlLabel>Start Date:</ControlLabel>
                        </div>
                        <DatePicker selected={this.props.project.startDate} onChange={this.props.handleStartDateChange.bind(this)} dateFormat={DATEFORMAT} disabled={this.props.canEdit?false:true} />
                    </FormGroup>
                    <FormGroup controlId="end_date">
                        <div>
                        <ControlLabel>Expected End Date:</ControlLabel>
                        </div>
                        <DatePicker selected={this.props.project.endDate} onChange={this.props.handleEndDateChange.bind(this)} dateFormat={DATEFORMAT} disabled={this.props.canEdit?false:true}/>
                    </FormGroup>
                    </div>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={this.props.handleChange.bind(this)}  defaultValue={this.props.project.description} disabled={this.props.canEdit?false:true}/>
                    </FormGroup>
                    <div >{
                        this.props.canEdit?<span className='splitButton'><button type="button" className='btn btn-primary btn-large'>Save</button></span>:<span className='splitButton'><button type="button" className='btn btn-primary btn-large' onClick={this.props.handleEdit}>Edit</button></span>
                    }
                    </div>
                </form>
 <div>
                    {this.props
                        && this.props.project
                        && this.props.project.project
                        && this.props.project.project.maintasks
                        ? this.props.project.project.maintasks.map((task) => (
                            <span><a onClick={()=>browserHistory.push('/maintask/'+this.props.project.project.id+'/'+task.id)}>{task.name}</a><br /></span>
                        )) : null}
                </div>
            </div>
        )
    }
}
 
