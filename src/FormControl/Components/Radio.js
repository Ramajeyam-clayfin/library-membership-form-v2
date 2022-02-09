import React from 'react';

const Radio = (props) => {

	return( 
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}  </label>
                {props.options.map((option,index) => {
                    return (
                        <label key={index} className="radio-inline">
                            <input
                                id = {props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option.value}
                                checked={ props.value === option.value }
                                type="radio" 
                            /> 
                            {option.displayValue}
                        </label>
                    );
                })}
            { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null }
        </div>
    );

}

export default Radio;