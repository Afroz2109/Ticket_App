import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import LoginImg from '../assets/Signup.webp';
import { useNavigate } from "react-router-dom";

export default function Signup({setUser}) {
    const [email, setEmail]= useState('');
    const navigate = useNavigate()

    const handleSubmit= ()=> {
        const[user, setUser]= useState();

        localStorage.setItem('usermail:', email)
        setUser(email)
        navigate('/')
    }
    return (
        <div style={{backgroundColor:'tomato',height:'92vh'}}>
            <Container>
                <Row>
                    <Col>
                        <img className="signupImg" src={LoginImg} alt="Login Illustration" style={{height:'55vh',width:'85vh',marginTop:'18%'}}/>
                        <h2 className="heading" style={{marginTop:'2%'}}>Book Movie Tickets || Erarn Reward Points</h2>
                    </Col>
                    <Col>
                       <Card className="logincard" style={{height:'22rem', width: '28rem',marginTop:'24%',marginLeft:'18%' }}>
                       <Card.Body  className="inner-auth-container">
                       <Form style={{width:'22rem'}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="login" 
                                onClick={handleSubmit}
                                >
                                 Signup
                            </Button>

                             <div style={{marginTop:'5px',marginLeft:'12%'}}>
                                 Already have an account? 
                                 <a style={{color:'blue',textDecoration:'none'}} href="/login"> Login here</a>
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
