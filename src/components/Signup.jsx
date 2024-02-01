import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Submit.css';


function FormGroupExample() {
  return (
    <Form className="p-5">
         <Form.Group className="mb-3" controlId="formGroupname">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="Fullname" placeholder="Enter First name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    <Form.Group className="sub">
    <Button as="input" className="but" type="submit" style={{background:"red"}} value="Submit" />{' '}
    </Form.Group>
    </Form>
  );
}

export default FormGroupExample;