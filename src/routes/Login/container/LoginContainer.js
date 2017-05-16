import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import {userNameChanged, passwordChanged} from '../modules/login.js'
const mapStateToProps = (state) => ({
    loginProps: state.login
})

const mapDispatchToProps = {
    userNameChanged,
    passwordChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)