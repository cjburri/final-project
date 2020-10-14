import React from 'react'
import { Button, Form, FormGroup, Input, Container } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { ChatFeed, Message } from 'react-chat-ui'
import Home from './home';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        // this.overlayDiv = React.createRef()

        // this.handleUser1Change = this.handleUser1Change.bind(this)
        // this.handleUser2Change = this.handleUser2Change.bind(this)
    }

    render() {
        return (
        <div id="wrapperDiv">
        <Container id="mainDiv">

        <Router>
        <h1 className="mt-5 mb-10" style={{color: "#ffffff"}}>Unify</h1>
                {/* <Container id="loginDiv"> */}
                <div className="mt-5 mb-10">
                    <FormGroup>
                            <NavLink to="/home" className="btn btn-lg btn-block" style={{backgroundColor: "#1DB954", border: "none", outline: "none"}} >
                                    Login
                            </NavLink>
                    </FormGroup>
                   
                        <Switch>
                            {/* <Route path="/" exact={true} component={Login}></Route>  */}
                            <Route path="/home" component={Home}></Route>
                        </Switch>
                    
                </div>
                </Router> 
            </Container>
           </div>
        )
    }
}
//onClick={this.login}
// value={this.state.user1} 
// value={this.state.user2}
// onChange={this.handleUser1Change}
// onChange={this.handleUser2Change}