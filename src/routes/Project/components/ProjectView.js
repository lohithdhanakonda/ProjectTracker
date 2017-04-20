import React from 'react';
import '../styles/ProjectStyles.scss';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link, browserHistory } from 'react-router';
import {form, FormGroup, ControlLabel, FormControl, Modal, Checkbox} from 'react-bootstrap';



const DATEFORMAT = 'YYYY/MM/DD'


export default class ProjectView extends React.Component {
    render() {
        let button=null;
        var canupdate;
        if (this.props.canEdit) {
          canupdate = false;
          button=  <span className='splitButton'><button type="button" className='btn btn-primary btn-large'>Save</button></span>
        } else {
            canupdate = true;
          button=  <span className='splitButton'><button type="button" className='btn btn-primary btn-large' onClick={this.props.handleEdit}>Edit</button></span>
        }
        return (
            <div className="col-md-12">
                <form >
                    <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Project Name" name="name" onChange={this.props.handleChange.bind(this)} disabled="true"/>
                    </FormGroup>
                       <FormGroup controlId="status">
                          <Checkbox inline name="status" onChange={this.props.handleChange.bind(this)} disabled={canupdate} >Project Archive</Checkbox>
                          </FormGroup>
                    <FormGroup controlId="employees">
                        <ControlLabel>Employees</ControlLabel>
                        <FormControl componentClass="select" multiple onChange={this.props.handleMultiSelectChange.bind(this)} value={this.props.project.resources} disabled={canupdate}>
                            {
                                this.props.resources.map((resource) => <option key={resource.id} value={resource.id}>{resource.name}</option>)
                            }
                        </FormControl>
                    </FormGroup>
                    <div className="col-md-12">
                    <FormGroup controlId="start_date" className="col-md-6">
                        <ControlLabel>Start Date:</ControlLabel>
                        <DatePicker selected={this.props.project.startDate} onChange={this.props.handleStartDateChange.bind(this)} dateFormat={DATEFORMAT} disabled={canupdate}/>
                    </FormGroup>
                    <FormGroup controlId="end_date" className="col-md-6">
                        <ControlLabel>Expected End Date:</ControlLabel>
                        <DatePicker selected={this.props.project.endDate} onChange={this.props.handleEndDateChange.bind(this)} dateFormat={DATEFORMAT} disabled={canupdate} />
                    </FormGroup>
                    </div>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={this.props.handleChange.bind(this)} disabled={canupdate}/>
                    </FormGroup>
                    <div >{
                        button
                    }
                    </div>
                </form>
            </div>
        )
    }
}
 
