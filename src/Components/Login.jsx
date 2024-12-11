import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import LoginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("userEmail", email);
        setUser(email);

        navigate("/");
    };

    return (
        <div style={{ backgroundColor: "tomato", height: "92vh" }}>
            <Container>
                <Row>
                    <Col>
                        <img
                        className="loginImg"
                            src={LoginImg}
                            alt="Login Illustration"
                            style={{ height: "59vh", width: "75vh", marginTop: "15%" }}
                        />
                        <h2 className="heading" style={{ marginTop: "2%" }}>
                            Book Movie Tickets || Earn Reward Points
                        </h2>
                    </Col>
                    <Col>
                        <Card
                        className="logincard"
                            style={{
                                height: "22rem",
                                width: "25rem",
                                marginTop: "24%",
                                marginLeft: "2%",
                            }}
                        >
                            <Card.Body className="inner-auth-container">
                                <Form style={{ width: "22rem" }} onSubmit={(e) => e.preventDefault()}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button
                                        onClick={handleLogin}
                                        variant="primary"
                                        className="login"
                                    >
                                        Login
                                    </Button>
                                    <div style={{color:'black',marginLeft:'25%',marginTop:'5px'}}>
                                             New user?<a style={{color:'blue',textDecoration:'none'}} href="/signup"> signup here</a>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
