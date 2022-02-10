import React from 'react';
import { Button } from 'react-bootstrap';


const Buttong = (props) => {

	let disabled = false;

	if (props.disabled) 
    {
		disabled = props.disabled
	}
		
	return(
        <Button 
            style= {props.style} 
            className = {props.type==='primary'? 'btn btn-primary' : 'btn btn-secondary'}
            onClick= {props.action} 
            disabled={disabled} >

          {props.title}

        </Button>
    );
}


export default Buttong;