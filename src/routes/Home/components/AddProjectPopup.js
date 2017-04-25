import React from 'react'
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Link, browserHistory } from 'react-router'
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {form, FormGroup, ControlLabel, FormControl, Modal} from 'react-bootstrap'

const DATEFORMAT = 'YYYY/MM/DD'


const AddProjectView = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit.bind(this) }>
                <FormGroup controlId="name">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Project Name" name="name" onChange={props.handleChange.bind(this) }/>
                </FormGroup>
                <FormGroup controlId="client_name">
                    <ControlLabel>Client Name</ControlLabel>
                    <FormControl type="text" placeholder="Client Name" name="clientname" onChange={props.handleChange.bind(this) }/>
                </FormGroup>
                <FormGroup controlId="employees">
                    <ControlLabel>Employees</ControlLabel>
                    <FormControl componentClass="select" multiple onChange={props.handleMultiSelectChange.bind(this) } value={props.project.resources}>
                        {
                            props.resources.map((resource) => <option key={resource.id} value={resource.id} id={resource.id}>{resource.name}</option>)
                        }
                    </FormControl>
                </FormGroup>
                <div>
                    <FormGroup controlId="start_date">
                        <ControlLabel>Start Date: </ControlLabel>
                        <DatePicker selected={props.project.startDate} onChange={props.handleStartDateChange.bind(this) } dateFormat={DATEFORMAT} />
                    </FormGroup>
                    <FormGroup controlId="end_date">
                        <ControlLabel>Expected End Date: </ControlLabel>
                        <DatePicker selected={props.project.endDate} onChange={props.handleEndDateChange.bind(this) } dateFormat={DATEFORMAT} />
                    </FormGroup>
                </div>
                <FormGroup controlId="description">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={props.handleChange.bind(this) }/>
                </FormGroup>
                <div>
                    <span className='splitButton'><button type="submit" className='btn btn-primary btn-large'>Submit</button></span>
                </div>
            </form>
        </div>
    )
}

const ModalPopup = (props) => {
    return (
        <div className="col-md-12">
            <Modal
                show={props.showModal}
                onHide={props.action}
                dialogClassName="custom-modal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProjectView
                        handleMultiSelectChange={props.handleMultiSelectChange}
                        handleStartDateChange={props.handleStartDateChange}
                        handleEndDateChange={props.handleEndDateChange}
                        handleSubmit={props.handleSubmit}
                        handleChange={props.handleChange}
                        project={props.project}
                        resources={props.resources}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default ModalPopup

