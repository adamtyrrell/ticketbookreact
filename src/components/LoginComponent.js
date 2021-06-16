import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {

        if(this.username.value === "demo" && this.password.value === "demo"){
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        } else {
            alert(`Not a valid username or password`);
        }
        
        event.preventDefault();
    }
    render(){
        return(
            <div className="col-4">
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
            </div>
        );
    }
}


export default Login;