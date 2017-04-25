import React from 'react';
import '../styles/HomeStyles.scss';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { TileLayout, TileLayoutItem } from 'pui-react-tile-layout';
import { ClickableAltPanel } from 'pui-react-panels';
import { Table, Navbar, Nav, NavItem, Modal, Button} from 'react-bootstrap';
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
}

class ChildTileLayoutItem extends React.Component {
  render() {
    return (
      <Draggable className="arrangeTiles" type='project' data={this.props.Project.id}>
        <TileLayoutItem>
          <ClickableAltPanel key={this.props.Project.id} onClick={() => browserHistory.push('/project/' + this.props.Project.id) }>
            <div>
              ProjectName: {this.props.Project.name}
              <div className="table-div">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>Completed</th>
                      <th>Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.props.Project.totalhours}</td>
                      <td>{this.props.Project.completed}</td>
                      <td>{this.props.Project.pendinghours}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </ClickableAltPanel>
        </TileLayoutItem>
      </Draggable>
    );
  }
}

class ProjectsView extends React.Component {
  render() {
    return (<div>
      <div className="row">
        <AlphaFilter FilterProject={this.props.FilterProject} />
        <div>
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
            <div className="projects-view">
              <TileLayout columns={{ md: 3, lg: 3, xs: 1, sm: 1 }}>{
                this.props.Projects.map((project) => <ChildTileLayoutItem key={project.id} Project={project} ProjectDetailsView={this.props.ProjectDetailsView} />)
              }
              </TileLayout>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 add-del-icons">
            <div>
              <div onClick={this.props.AddProject}  >
                <span className="addproject"><i className="fa fa-plus-circle iconButton" ></i> Add Project</span>
              </div>
              <div>
                <Droppable types={'project'} onDrop={this.props.DragProject} >
                  <div className="Smoothie">
                    <span className="archiveproject">  <i className="fa fa-archive iconButton" ></i> Archive Project</span>
                  </div>
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

class HomeView extends React.Component {
  render() {
    return (
      <div className="homeview">
        <ProjectsView
          Projects={this.props.filteredprojects}
          AddProject={this.props.Add_Project}
          DragProject={this.props.Drag_Project}
          ProjectDetailsView={this.props.Project_Details}
          FilterProject={this.props.filterProjects}/>

          <ModalPopup showModal={this.props.showmodal}
           action={this.props.Add_Project}
           handleMultiSelectChange={this.props.handleMultiSelectChange}
           handleStartDateChange={this.props.handleStartDateChange}
           handleEndDateChange={this.props.handleEndDateChange}
           handleSubmit={this.props.handleSubmit} 
           handleChange={this.props.handleChange}
           project={this.props.project}
           resources={this.props.resources}/>
      </div>
    );
  }
}

export default HomeView
