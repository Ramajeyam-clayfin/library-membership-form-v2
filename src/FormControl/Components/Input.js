import React from 'react';
import './formStyle.css'

const Input = (props) => {
  let formControl = "form-control";

  if (props.touched && !props.valid) {
      formControl = 'form-control control-error';
  }
	return (  
        <div>
            <label htmlFor={props.name} >{props.title} : </label>
            <input
                className={formControl}
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder} 
            />
            {props.errorMsg  ?
                <p style={{color:"red", marginBottom: "15px", fontSize: "15px"}}> {props.errorMsg} </p> 
                : null
            }
            
        </div>
    )
}

export default Input;