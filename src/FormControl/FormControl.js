import React, { Component }  from "react";

import {initialState} from './Components/metaData';
import Validation from './Components/Validation';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Dropdown from './Components/Dropdown';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Button from './Components/Button'

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
        console.log(updatedFormElement);
  
        let value;
        let selectedOptions;
        let newValArray;
  
        if (updatedControls[name].value instanceof Array &&
            updatedControls[name].type === 'select' )
        {
            selectedOptions = event.target.selectedOptions;
            // newValArray = [...selectedOptions].map(option => option.value);
            value = selectedOptions.value;
            console.log("Select - Value : "+value);
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

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) 
        {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        let newLine = '\r\n';
        alert(
          ` Name : ${formData.name}${newLine} Age : ${formData.age}${newLine} Email : ${formData.email}${newLine} Mobile : ${formData.mobile}${newLine} Address : ${formData.line1}, ${formData.line2}, ${formData.city}, ${formData.state}, ${formData.zipcode} - ${formData.country}${newLine} What would you use the library for : ${formData.radio}${newLine} Which sections of the library would you like access to : ${formData.checkbox}${newLine} About : ${formData.about} `
        );
        // console.dir(formData);
    }

    handleClearForm = () => {

      this.setState(
        {
            formControls: initialState,
            formIsValid: false
        }
      );
    }


    render() {
        return(
            <div>
                <Input 
                    inputType={'text'}
                    title={"Name : "}
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
                    title={"Age : "}
                    name={'age'}
                    placeholder={this.state.formControls.age.placeholder}
                    value={this.state.formControls.age.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.age.touched}
                    valid={this.state.formControls.age.valid}
                    errorMsg={this.state.formControls.age.errorMsg}
                />

                <Radio  
                    title={'Gender : '}
                    name={'gender'}
                    handleChange={this.changeHandler}
                    value = {this.state.formControls.gender.value}
                    options={this.state.formControls.gender.options}
                    touched={this.state.formControls.gender.touched}
                    valid={this.state.formControls.gender.valid}
                    errorMsg={this.state.formControls.gender.errorMsg}
                /> 

                <Input 
                    inputType={'email'}
                    title={"Email : "}
                    name={'email'}
                    placeholder={this.state.formControls.email.placeholder}
                    value={this.state.formControls.email.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}
                    errorMsg={this.state.formControls.email.errorMsg}
                />

                <Input 
                    inputType={'number'}
                    title={"Mobile : "}
                    name={'mobile'}
                    placeholder={this.state.formControls.mobile.placeholder}
                    value={this.state.formControls.mobile.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.mobile.touched}
                    valid={this.state.formControls.mobile.valid}
                    errorMsg={this.state.formControls.mobile.errorMsg}
                />

                <Input 
                    inputType={'text'}
                    title={"Address : "}
                    name={'line1'}
                    placeholder={this.state.formControls.line1.placeholder}
                    value={this.state.formControls.line1.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.line1.touched}
                    valid={this.state.formControls.line1.valid}
                    errorMsg={this.state.formControls.line1.errorMsg}
                />

                <Input 
                    inputType={'text'}
                    // title={"Address"}
                    name={'line2'}
                    placeholder={this.state.formControls.line2.placeholder}
                    value={this.state.formControls.line2.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.line2.touched}
                    valid={this.state.formControls.line2.valid}
                    errorMsg={this.state.formControls.line2.errorMsg}
                />

                <Input 
                    inputType={'text'}
                    // title={"Address"}
                    name={'city'}
                    placeholder={this.state.formControls.city.placeholder}
                    value={this.state.formControls.city.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.city.touched}
                    valid={this.state.formControls.city.valid}
                    errorMsg={this.state.formControls.city.errorMsg}
                />

                <Input 
                    inputType={'text'}
                    // title={"Address"}
                    name={'state'}
                    placeholder={this.state.formControls.state.placeholder}
                    value={this.state.formControls.state.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.state.touched}
                    valid={this.state.formControls.state.valid}
                    errorMsg={this.state.formControls.state.errorMsg}
                />

                <Input 
                    inputType={'number'}
                    // title={"Address"}
                    name={'zipcode'}
                    placeholder={this.state.formControls.zipcode.placeholder}
                    value={this.state.formControls.zipcode.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.zipcode.touched}
                    valid={this.state.formControls.zipcode.valid}
                    errorMsg={this.state.formControls.zipcode.errorMsg}
                />

                <Dropdown 
                    title={'Country : '}
                    name={'country'}
                    placeholder={this.state.formControls.country.placeholder}
                    value={this.state.formControls.country.value}
                    handleChange={this.changeHandler}
                    options={this.state.formControls.country.options}
                    touched={this.state.formControls.country.touched}
                    valid={this.state.formControls.country.valid}
                    errorMsg={this.state.formControls.country.errorMsg}
                /> <br/>

                <Radio  
                    title={'What would you use the library for?'}
                    name={'radio'}
                    handleChange={this.changeHandler}
                    value = {this.state.formControls.radio.value}
                    options={this.state.formControls.radio.options}
                    touched={this.state.formControls.radio.touched}
                    valid={this.state.formControls.radio.valid}
                    errorMsg={this.state.formControls.radio.errorMsg}
                /> <br/>

                <Checkbox  
                    title={'Which sections of the library would you like access to?'}
                    name={'checkbox'}
                    handleChange={this.changeHandler}
                    value = {this.state.formControls.checkbox.value}
                    options={this.state.formControls.checkbox.options}
                    touched={this.state.formControls.checkbox.touched}
                    valid={this.state.formControls.checkbox.valid}
                    errorMsg={this.state.formControls.checkbox.errorMsg}
                /> <br/>

                <Textarea 
                    title={'About : '}
                    name={'about'}
                    placeholder={this.state.formControls.about.placeholder}
                    value={this.state.formControls.about.value}
                    handleChange={this.changeHandler}
                    touched={this.state.formControls.about.touched}
                    valid={this.state.formControls.about.valid}
                    errorMsg={this.state.formControls.about.errorMsg}
                />

                <Button 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    disabled={! this.state.formIsValid}
                /> { /*Submit */ }
                
                <Button 
                    action = {this.handleClearForm}
                    type = {'secondary'}
                    title = {'Clear'}
                    style={buttonStyle}
                /> {/* Clear the form */}



            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }