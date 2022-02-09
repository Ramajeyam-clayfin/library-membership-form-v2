import React, { Component }  from "react";

import {initialState} from './Components/metaData';
import Validation from './Components/Validation';
import Input from './Components/Input';
// import TextArea from './Components/Textarea';
// import Dropdown from './Components/Dropdown';
// import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
// import Button from './Components/Button'

export default class FormControl extends Component {

    constructor(props){
        super(props);
        this.state = {
            formIsValid: false,
            formControls : initialState
            }
    }

    changeHandler = event => {
    
        const name = event.target.name;
        console.log("Name : "+name);
        const updatedControls = { ...this.state.formControls };
        const updatedFormElement = { ...updatedControls[name] };
  
        let value;
        let selectedOptions;
        let newValArray;
  
      //  console.log(updatedControls[name].validationRules.isNumber)
      //  if (updatedControls[name].validationRules.isNumber)
      //   {
      //     const pattern = /^[0-9\b]+$/ 
      //     if ((event.target.value!== '') && (!pattern.test(event.target.value)))
      //       return;
      //   }
  
      //   if (updatedControls[name].validationRules.maxLength)
      //   {
      //     if (event.target.value.length > updatedControls[name].validationRules.maxLength)
      //       return;
      //   }
  
        if (updatedControls[name].value instanceof Array &&
            updatedControls[name].type === 'select' &&
            updatedControls[name].multiple !== undefined &&
            updatedControls[name].multiple )
        {
            selectedOptions = event.target.selectedOptions;
            newValArray = [...selectedOptions].map(option => option.value);
            value = newValArray;
            console.log("MultiSelect - Value : "+value);
        }
        else 
        {
            value = event.target.value;

            if( updatedControls[name].value instanceof Array &&
                updatedControls[name].type === 'checkbox' ) 
            {
                console.log("Before Checkbox Value : "+value);
                if(updatedControls[name].value.indexOf(value) > -1) 
                {
                    newValArray = 
                    updatedControls[name].value.filter(s => s !== value)
                } 
                else 
                {
                    newValArray = [...updatedControls[name].value, value];
                }
                value = newValArray;
                console.log("Checkbox Value : "+value)
            }
            else 
            {
                value = event.target.value
                console.log("Value : "+value)
            }
        }
       
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
  
        let ValidationResult = Validation(value, updatedFormElement.validationRules);
        console.log(ValidationResult);
        updatedFormElement.valid = ValidationResult.valid;

        if ((!updatedFormElement.valid) && updatedFormElement.touched) //for update the error message value
        {
          updatedFormElement.errorMsg = ValidationResult.errorMsg
        }
        else 
        {
          updatedFormElement.errorMsg = ''
        }
  
        updatedControls[name] = updatedFormElement;
  
        let formIsValid = true;

        for (let inputIdentifier in updatedControls) 
        {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
  
        this.setState(
            {
                formControls: updatedControls,
                formIsValid: formIsValid
            }
        );
  
    }


    render() {
        return(
            <div>
                <Input 
                    inputType={'text'}
                    title={"Name"}
                    name={'name'}
                    placeholder={this.state.formControls.name.placeholder}
                    value={this.state.formControls.name.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                    errorMsg={this.state.formControls.name.errorMsg}
                />

                <Input 
                    inputType={'number'}
                    title={"Age"}
                    name={'age'}
                    placeholder={this.state.formControls.age.placeholder}
                    value={this.state.formControls.age.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.age.touched}
                    valid={this.state.formControls.age.valid}
                    errorMsg={this.state.formControls.age.errorMsg}
                />

                <Radio  
                    title={'Gender'}
                    name={'gender'}
                    handleChange={this.changeHandler}
                    value = {this.state.formControls.gender.value}
                    options={this.state.formControls.gender.options}
                    touched={this.state.formControls.gender.touched}
                    valid={this.state.formControls.gender.valid}
                    errorMsg={this.state.formControls.gender.errorMsg}
                /> 

            </div>
        );
    }
}