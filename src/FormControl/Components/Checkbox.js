import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkbox = (props) => {
  
  let formControl = "checkbox-inline";

  if (props.touched && !props.valid) 
  {
    formControl = 'checkbox-inline control-error';
  }
  
	return( 
       
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.name}style={{textAlign:"end"}}>
                    {props.title}
                </Form.Label>
                <Col sm={3} className={formControl} style={{textAlign:"start"}}>
                {props.options.map((option,index) => {
                    return (
                        
                            <Form.Check 
                                key={index}
                                 id = {props.name}
                                 name={props.name}
                                 onChange={props.handleChange}
                                 label={option.displayValue}
                                 value={option.value}
                                 checked={ props.value.indexOf(option.value) > -1 }
                                 type="checkbox" 
                                 isInvalid={ !!props.errorMsg}
                            />
                                
                    );
                })}
                                {/* <Form.Control.Feedback type='invalid'>{ props.errorMsg }</Form.Control.Feedback> */}


                </Col>
                { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null }
            </Form.Group>
        </div>
    );

}

export default Checkbox;