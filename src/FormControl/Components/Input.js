import React from 'react';
import './formStyle.css';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = (props) => {
  let formControl = "form-control";

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }

	return (  
        <div>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.name} style={{textAlign:"end"}}>
                {props.title}
                </Form.Label>
                <Col sm={5}>
                    <Form.Control
                    className={formControl}
                    id={props.name}
                    value={props.value}
                    type={props.inputType}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={props.handleChange}
                    />
                </Col>
            </Form.Group>
            
            {props.errorMsg  ?
                <p style={{color:"red", marginBottom: "15px", fontSize: "15px"}}> {props.errorMsg} </p> 
                : null
            }
            
        </div>
    )
}

export default Input;