import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Dropdown = (props) => {
    let formControl = "";

    if (props.touched && !props.valid) 
    {
        formControl = 'control-error';
	}

	return(
		
        <div className="form-group">
			<Form.Group as={Row} className="mb-3">
			   <Form.Label column sm={3}  htmlFor={props.name} style={{textAlign:"end"}}>
			   	{props.title}
			   </Form.Label>
			<Col sm={5}>
				<Form.Select
					id = {props.name}
					name={props.name}
					multiple={props.multiple}
					value={props.value}
					onChange={props.handleChange}
					className={formControl}
				>
					<option value="" disabled>{props.placeholder}</option>
					{props.options.map((option,index) => {
						return (
							<option
								key={index}
								value={option.value}
								label={option.displayValue}>{option.displayValue}
							</option>
						);
					})}
				</Form.Select>
			</Col>
		    
			{ props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null }
			</Form.Group>
		</div>
	)
}	


export default Dropdown;