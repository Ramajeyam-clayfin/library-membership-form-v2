import React from 'react';

const Checkbox = (props) => {
  
  let formControl = "checkbox-inline";

  if (props.touched && !props.valid) 
  {
    formControl = 'checkbox-inline control-error';
  }
  
	return( 
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <div className={formControl}>
                {props.options.map((option,index) => {
                    return (
                        <label key={index} className="checkbox-inline" >
                            <input
                                id = {props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option.value}
                                checked={ props.value.indexOf(option.value) > -1 }
                                type="checkbox" 
                            /> 
                            {option.displayValue}
                        </label>
                    );
                })}
            </div>
            { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null }
        </div>
    );

}

export default Checkbox;