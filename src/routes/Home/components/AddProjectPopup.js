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


class AddProjectView extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit.bind(this)}>
                    <FormGroup controlId="name">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" placeholder="Project Name" name="name" onChange={this.props.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup controlId="employees">
                        <ControlLabel>Employees</ControlLabel>
                        <FormControl componentClass="select" multiple onChange={this.props.handleMultiSelectChange.bind(this)} value={this.props.project.resources}>
                            {
                                this.props.resources.map((resource) => <option key={resource.id} value={resource.id}>{resource.name}</option>)
                            }
                        </FormControl>
                    </FormGroup>
                    <div>
                    <FormGroup controlId="start_date">
                        <ControlLabel>Start Date:</ControlLabel>
                        <DatePicker selected={this.props.project.startDate} onChange={this.props.handleStartDateChange.bind(this)} dateFormat={DATEFORMAT} />
                    </FormGroup>
                    <FormGroup controlId="end_date">
                        <ControlLabel>Expected End Date:</ControlLabel>
                        <DatePicker selected={this.props.project.endDate} onChange={this.props.handleEndDateChange.bind(this)} dateFormat={DATEFORMAT} />
                    </FormGroup>
                    </div>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" name="description" placeholder="Project Description" onChange={this.props.handleChange.bind(this)}/>
                    </FormGroup>
                    <div >
                        <span className='splitButton'><button type="submit" className='btn btn-primary btn-large'>Submit</button></span>
                    </div>
                </form>
            </div>
        )
    }
}

const ModalPopup = React.createClass({
  render() {
    return (
        <div className="col-md-12">
        <Modal
          show={this.props.showModal}
          onHide={this.props.action}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <AddProjectView
                  handleMultiSelectChange={this.props.handleMultiSelectChange}
                  handleStartDateChange={this.props.handleStartDateChange}
                  handleEndDateChange={this.props.handleEndDateChange}
                  handleSubmit={this.props.handleSubmit}
                  handleChange={this.props.handleChange} 
                  project={this.props.project}
                  resources={this.props.resources}/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </div >
    );
  }
});

export default ModalPopup
 
