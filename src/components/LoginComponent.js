import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn : false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {

        if(this.username.value === "demo" && this.password.value === "demo"){
            this.setState({
                loggedIn: !this.state.loggedIn
            });
            window.location.replace('/portal');
            event.preventDefault();
            
        } else {
            alert(`Not a valid username or password`);
        }
        
        event.preventDefault();
    }
    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <Card className="loginCard">
                    <CardTitle className="text-center">Welcome to TicketBook.</CardTitle>
                    <CardBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                        Remember me
                                    </Label>
                            </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                </CardBody>
                </Card>
            </div>
        );
    }
}


export default Login;