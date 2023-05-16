import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {

    // createUser tak eikhane use korbo tai ata k object{} hisabe niye distructuring kore use korbo.
    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    // register from er box er information gula pete chai..

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)

    }

    return (
        // Login.jsx theke copy kore anee aktu modify korlam
        <Container className='w-25 mx-auto'>
            <h2>Please Register</h2>

            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'

                        label={<>Accept <Link to='/terms'> Term & Conditions </Link></>} />
                </Form.Group>

                {/* terms & condition ta accept na korle button ta disable thakbe */}
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                
                <br />
                {/* registation kora na thakle registation page a niye jabe */}
                <Form.Text className="text-secondary">
                    Already Have An Account ?  <Link to='/login'>Please Login </Link>
                </Form.Text>
                <br />
                {/* email password vull hole akta warning dekhabo ..ar thik hole success dekhabo*/}
                <Form.Text className="text-success">
                    {/* Email Correct.Login successfull */}
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {/* Please write correct email password */}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;