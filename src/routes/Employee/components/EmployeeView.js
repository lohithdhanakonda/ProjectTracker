import React from 'react'
import PageTitle from '../../../components/PageTitle/PageTitle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const style = {
    marginRight: 20
};
const tableStyle = {
    width: '600px'
};

class EmployeeView extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            employees: [
                {id: 1, name: "emp1"}, 
                {id: 2, name: "emp2"}, 
                {id: 3, name: "emp3"}
            ],
            newEmployee: ''
        };
    }
    handleOpen = () => {
        this.setState({open: true});
    };
    handleClose = () => {
        if (!this.state.newEmployee) {
            this.setState({open: false});
            return;
        }
        var newArray = this
            .state
            .employees
            .slice();
        newArray.push({
            id: newArray.slice(-1)[0].id + 1,
            name: this.state.newEmployee
        });
        this.setState({employees: newArray, open: false, newEmployee: ''});
    };
    removeEmployee = (id) => {
        this.setState({
            employees: this
                .state
                .employees
                .filter(x => x.id != id)
        });
    }
    handleChange = (evt) => {
        this.setState({newEmployee: evt.target.value});
    }
    componentDidMount(){
        this.props.LoadEmployeeData(this.props.routeParams.projectId)
        console.log(this.props.employees);
    }
    render() {

        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                this.handleClose
            } />, < FlatButton label = "Add" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onTouchTap = {
                this.handleClose
            } />
        ];
        return (
            <div>
                <PageTitle title="Employee name"></PageTitle>
                <RaisedButton
                    primary={true}
                    label="+ Add Employee"
                    onTouchTap={this.handleOpen}/>
                <br/>
                <Table style={tableStyle}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Id</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this
                            .state
                            .employees
                            .map(emp => <TableRow key={emp.id}>
                                <TableRowColumn>{emp.id}</TableRowColumn>
                                <TableRowColumn>{emp.name}</TableRowColumn>
                                <TableRowColumn>
                                    <a href="#" onClick={() => this.removeEmployee(emp.id)}>delete</a>
                                </TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Dialog
                    title="Add employee to project"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    Enter Employee Name:&nbsp;&nbsp;
                    <TextField
                        hintText="Employee Name"
                        value={this.state.newEmployee}
                        onChange={this.handleChange}/>
                </Dialog>
            </div>
        )
    }
}
export default EmployeeView