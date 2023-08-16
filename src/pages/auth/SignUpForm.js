import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    });
    const { username, password1, password2 } = signUpData;

    const history = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setSignUpData({
            // load the initial data set
            ...signUpData,
            // creates KV pair for the event, tracks against the name of the and attaches the new value that has changed
            // this allows reuse - so we add to each form component
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('dj-rest-auth/registration/', signUpData)
            history.push("/signin")
        } catch(err){
            // ? siginifies conditional chaining, so if not available don't throw an error
            setErrors(err.respomse?.data)
        }
    }

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="password" 
                    placeholder="Password" 
                    name="password1"
                    value={password1}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                />
            </Form.Group>
            

            <Button type="submit" className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>
                Sign Up
            </Button>
        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;