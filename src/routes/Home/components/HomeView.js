import React from 'react';
import '../styles/HomeStyles.scss';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { TileLayout, TileLayoutItem } from 'pui-react-tile-layout';
import { ClickableAltPanel } from 'pui-react-panels';
import { Table, Navbar, Nav, NavItem, Tooltip, OverlayTrigger, Modal, Button} from 'react-bootstrap';
import { Draggable, Droppable } from 'react-drag-and-drop';
import ModalPopup from './AddProjectPopup';
import {browserHistory} from 'react-router';

const AlphaFilter = (props) => {
  var indexes = [];
  for (var index = 97; index <= 122; index++) {
    indexes.push(index);
  }
  return (<div className="ln-letters">
    <a onClick={() => props.FilterProject(0) }>All</a>
    <a onClick={() => props.FilterProject(1) }>0-9</a>
    {indexes.map((alph, i) => (
      <a onClick={() => props.FilterProject(alph) } key={i}>{String.fromCharCode(alph) }</a>
    )) }</div>)
};

const ChildTileLayoutItem = (props) => {
    return (
      <Draggable className="arrangeTiles" type='project' data={props.Project.id} enabled={!props.showArchieve? true : false}>
        <TileLayoutItem>
          <ClickableAltPanel key={props.Project.id} onClick={() => browserHistory.push('/project/' + props.Project.id) }>
            <div>
              <div className="project-name">
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{props.Project.name}</Tooltip>}>
                  <strong>{props.Project.name}</strong>
                </OverlayTrigger>
              </div>
              <div className="table-div">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.Project.startdate}</td>
                      <td>{props.Project.enddate == null? "Null" : props.Project.enddate }</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </ClickableAltPanel>
        </TileLayoutItem>
      </Draggable >
    );
  };

const ProjectsView = (props) => {
    return (
    <div>
      <div className="row">
        <AlphaFilter  FilterProject={props.FilterProject}/>
        <div>
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
            <div className="projects-view">
              <TileLayout columns={{ md: 3, lg: 3, xs: 1, sm: 1 }}>{
                props.Projects.map((project) => <ChildTileLayoutItem key={project.id} Project={project} ProjectDetailsView={props.ProjectDetailsView} showArchieve={props.showArchieve} />)
              }
              </TileLayout>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 add-del-icons">
            <div>
              <div onClick={props.AddProject}  >
                <span className="addproject"><i className="fa fa-plus-circle iconButton" ></i> Add Project</span>
              </div>
              <div>
                <Droppable types={'project'} onDrop={props.DragProject} enabled={!props.showArchieve? true : false}>
                  <div className="Smoothie">
                    <span className="archiveproject">  <i className="fa fa-archive iconButton" ></i> Archive Project</span>
                  </div>
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };


class HomeView extends React.Component {
  render() {
    return (
      <div className="homeview">
        <ProjectsView
          Projects={this.props.projectsData
            && this.props.projectsData.showArchieve
            ? this.props.projectsData.archievedProjects : this.props.projectsData.projects}
          AddProject={this.props.Add_Project}
          DragProject={this.props.Archieve_Project}
          ProjectDetailsView={this.props.Project_Details}
          FilterProject={this.props.filterProjects}
          showArchieve={this.props.projectsData.showArchieve} />
        {this.props.projectsData && this.props.projectsData.archievedProjects ?
          <div>
            <a onClick={() => this.props.ShowArchieveProjects()}>
              {!this.props.projectsData.showArchieve ? <span>Show Archieved projects</span> : <span>Hide Archieved projects</span>}
            </a>
          </div> : null}
        <Modal show={this.props.projectsData.deleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to archieve?
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.ArchiveProjectConfirmed()}>Archieve</Button>
            <Button onClick={() => this.props.Archieve_Project()}>Close</Button>
          </Modal.Footer>
        </Modal>
        <ModalPopup showModal={this.props.showmodal}
          action={this.props.Add_Project}
          handleMultiSelectChange={this.props.handleMultiSelectChange}
          handleStartDateChange={this.props.handleStartDateChange}
          handleEndDateChange={this.props.handleEndDateChange}
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          project={this.props.projectsData.project}
          resources={this.props.projectsData.resources} />
      </div>
    );
  }
}

export default HomeView
