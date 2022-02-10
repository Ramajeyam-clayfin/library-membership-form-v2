import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Textarea = (props) => {  
  let formControl = "form-control";

  if (props.touched && !props.valid) 
  {
      formControl = 'form-control control-error';
  }
  
    return (
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.name} style={{textAlign:"end"}}>
                {props.title}
                </Form.Label>
                <Col sm={5}>
                <Form.Control 
                    as="textarea" 
                    className={formControl}
                    name={props.name}
                    rows={props.rows}
                    cols = {props.cols}
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder={props.placeholder} 
                    isInvalid={ !!props.errorMsg}
                />
                <Form.Control.Feedback type='invalid'>{ props.errorMsg }</Form.Control.Feedback>
                {/* { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null } */}
            </Col>
            </Form.Group>
        </div>
    )
};

export default Textarea;