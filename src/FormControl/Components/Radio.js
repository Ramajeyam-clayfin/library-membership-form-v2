import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Radio = (props) => {

	return( 
        
      
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.name} style={{textAlign:"end"}}>
                    {props.title}
                </Form.Label>
                {props.options.map((option,index) => {
                    return (
                        <Col sm={2} key={index} className="radio-inline" style={{textAlign:"start"}}>
                            <Form.Check
                                id = {props.name}
                                name={props.name}
                                type="radio"
                                label={option.displayValue}
                                value={option.value}
                                checked={ props.value === option.value }
                                onChange={props.handleChange}
                            />
                        
                        </Col>
                    );
                })}
            { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null }
            </Form.Group>
        </div>
    );

}

export default Radio;