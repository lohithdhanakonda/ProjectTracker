import React from 'react';
import {TileLayout, TileLayoutItem} from 'pui-react-tile-layout';
import {ClickableAltPanel} from 'pui-react-panels';
import {Table, Navbar, Nav, NavItem} from 'react-bootstrap';
import {Draggable, Droppable} from 'react-drag-and-drop'
import {
    TextField,
    RaisedButton,
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui';

const styles = {
    customWidth: {
        width: "500px"
    },
    customPadding: {
        paddingLeft: "500px",
        paddingTop: "50px"
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    }
}

class LoginView extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }
    click = () => {
        alert('Click func');
        window.location.href='/';
    }
    render() {
        return (
            <div style={styles.customPadding}>
                <Card style={styles.customWidth}>
                    <CardText>
                        <h2>Login</h2>
                        <div>
                            <TextField floatingLabelText="Enter Email ID"/>
                        </div>
                        <div>
                            <TextField type="password" floatingLabelText="Enter Password"/>
                        </div>
                        <RaisedButton label="Login" primary={true} onClick={this.click}>
                        </RaisedButton>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default LoginView;