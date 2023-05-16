import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    // login box er information gula pete chai...

const {signIn} = useContext(AuthContext);

// signin hober por user jno home page a jai oi kaj tai korbo akhn..
const navigate = useNavigate();

// login page a jawar agee user er last location ta set korbo
const location = useLocation();
console.log( 'login page location',location);

// jodi user er last location thake tahole login hower por oi location a pathabe nahole '/category/0' a pathabe
const from = location.state?.form?.pathname||'/category/0'

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // signin hober por user jno home page a jai oi kaj tai korbo akhn..

            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.log(error);
        })
}
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                {/* registation kora na thakle registation page a niye jabe */}
                <Form.Text className="text-secondary">
                    Don't Have An Account ?  <Link to='/register'>Please Register </Link>
                </Form.Text>
                <br />
                {/* email password vull hole akta warning dekhabo ..ar thik hole success dekhabo*/}
                <Form.Text className="text-success">
                    Email Correct.Login successfull
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    Please write correct email password
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;