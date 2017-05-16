import React from 'react'
import {Button} from 'react-bootstrap'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/loginStyles.scss'
 const LoginView = (props) => {
        return (
            <div className="login-view">

            <TextField
                        hintText="User name"
                        floatingLabelText="User Name"
                        onChange={props.userNameChanged}
                        /><br />
            <TextField
                        hintText="Password"
                        type="password"
                        floatingLabelText="Password"
                        onChange={props.passwordChanged}
                        /><br />
                        <div className="login-button">
                            <RaisedButton label="Login"
                                          primary={true} 
                                         disabled={!(props.loginProps.username && props.loginProps.password)}/>
                        </div>
            </div>
        )
}
export default LoginView