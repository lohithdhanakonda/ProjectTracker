import React from 'react'
import '../styles/HomeStyles.scss'
import PageTitle from '../../../components/PageTitle/PageTitle';
import { TileLayout, TileLayoutItem } from 'pui-react-tile-layout';
import { ClickableAltPanel } from 'pui-react-panels';
import { Table, Navbar, Nav, NavItem} from 'react-bootstrap';
import { Draggable, Droppable } from 'react-drag-and-drop'

class NavbarInstance extends React.Component {
  render(){
    return (
      <Navbar collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight className="pullRight">
            <NavItem eventKey={1} href="#" >   
              <div onClick={this.props.AddProject}  >
                <div>
                 Add Project
                 </div>
                <i className="fa fa-plus-circle iconButton" ></i>
              </div>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <div>
                <Droppable types={'project'} onDrop={this.props.DragProject} >
                    <div>
                   Archive Project
                 </div>
                  <div className="Smoothie">
                    <i className="fa fa-archive iconButton" ></i>
                  </div>
                </Droppable>
              </div>
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>);
  }
}

class ChildTileLayoutItem extends React.Component {
  render(){
    return (
      <Draggable className="arrangeTiles" type='project' data={this.props.Project.ID}>
        <TileLayoutItem>
          <ClickableAltPanel key={this.props.Project.id} onClick={()=>this.props.ProjectDetailsView(this.props.Project.id)}>
            <div>
              ProjectName:{this.props.Project.name}
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
          </ClickableAltPanel>
        </TileLayoutItem>
      </Draggable>
    );
  }
}

class ProjectsHome extends React.Component {
     render(){
    return (<div>
      <NavbarInstance DragProject={this.props.DragProject} AddProject={this.props.AddProject} />
      <TileLayout columns={{ xs: 1, sm: 1, md: 3 }}>{
        this.props.Projects.map((project) => <ChildTileLayoutItem key={project.Team} Project={project} ProjectDetailsView={this.props.ProjectDetailsView} />)
      }
      </TileLayout>
    </div>);
  }
}

 class HomeView extends React.Component {
 render(){
  return (
    <div>
      <ProjectsHome Projects={this.props.projects} AddProject={this.props.Add_Project} DragProject={this.props.Drag_Project} ProjectDetailsView={this.props.Project_Details} />
    </div>
  );
 }
}

export default HomeView
