import React from 'react'
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Link, browserHistory } from 'react-router'
import Select from 'react-select';
// import DatePicker from 'react-datepicker'
//import moment from 'moment'
import '../styles/bootstrap-multiselect.css'
import {form, FormGroup, ControlLabel, FormControl, Modal} from 'react-bootstrap'
import 'react-date-picker/index.css'
import { DateField } from 'react-date-picker'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import  '../../../styles/widgetStyles.scss';
const DATEFORMAT = 'YYYY/MM/DD'


class AddProjectView extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit.bind(this) }>
                    <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Project Name" name="name" onChange={this.props.handleChange.bind(this) }/>
                    </FormGroup>
                    <FormGroup controlId="client_name">
                        <ControlLabel>Client Name</ControlLabel>
                        <FormControl type="text" placeholder="Client Name" name="clientname" onChange={this.props.handleChange.bind(this) }/>
                    </FormGroup>
                    <FormGroup controlId="employees">
                        <ControlLabel>Employees</ControlLabel>
                    <Select multi  value={this.props.project.resources} placeholder="Select Resources" options={this.props.resources} onChange={this.props.handleMultiSelectChange.bind(this)} labelKey='name' valueKey='id'/>
                    </FormGroup>
                    <div>
                        <FormGroup controlId="start_date">
                            <ControlLabel>Start Date: </ControlLabel>
                        <DateTimePicker time={false} onChange={this.props.handleStartDateChange} value={this.props.project.startDate}/>
                        </FormGroup>
                        <FormGroup controlId="end_date">
                            <ControlLabel>Expected End Date: </ControlLabel>
                        <DateTimePicker time={false} onChange={this.props.handleEndDateChange} value={this.props.project.endDate}/>
                        </FormGroup>
                    </div>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={this.props.handleChange.bind(this)} />
                    </FormGroup>
                    <div>
                        <span className='splitButton'><button type="submit" className='btn btn-primary btn-large'>Submit</button></span>
                    </div>
                </form>
          </div>
      )
  }
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

