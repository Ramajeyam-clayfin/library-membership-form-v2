import React, { Component }  from "react";

import {initialState} from './Components/metaData';
import Validation from './Components/Validation';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Dropdown from './Components/Dropdown';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Buttong from './Components/Button';

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
        const title = event.target.name1;
        console.log("Name : "+name);
        console.log("title : "+title);
        const updatedControls = { ...this.state.formControls }; //all values in formcontrols
        const updatedFormElement = { ...updatedControls[name] }; // in formcontrols stores only the value where the change is happened
        // console.log(updatedFormElement);
  
        let value; //used to store the values of where the change is happened
        let selectedOptions; //used to store the values of where the change is happened
        let newValArray; //used to store the values of where the change is happened

        if(name === 'address' )
        {

        }
  
        if (updatedControls[name].value instanceof Array &&
            updatedControls[name].type === 'select' )                 //check if the change is happened in dropdown box
        {
            selectedOptions = event.target.selectedOptions;
            // newValArray = [...selectedOptions].map(option => option.value);
            value = selectedOptions.value;
            // console.log("Select - Value : "+value);
        }
        else 
        {
            value = event.target.value;

            if( updatedControls[name].value instanceof Array &&
                updatedControls[name].type === 'checkbox' )         //check if the change is happened in checkbox box
            {
                // console.log("Before Checkbox Value : "+value);
                if(updatedControls[name].value.indexOf(value) > -1)  // ckecks if checkbox value is having the same value or not using indexof array method
                {
                    newValArray = updatedControls[name].value.filter(s => s !== value) // filter and stores in newValArray except the same value that is passed 
                    console.log("Checkbox 1 Value : "+value)
                } 
                else 
                {
                    newValArray = [...updatedControls[name].value, value]; // if no duplicate values passed then using spread concat the values
                    console.log("Checkbox  2 Value : "+value)
                }
                value = newValArray; // stores the values in newValArray into value
                // console.log("Checkbox Value : "+value)
            }
            else    //else the values are stored in values 
            {
                value = event.target.value
                // console.log("Value : "+value)
            }
        }
       
        updatedFormElement.value = value; // change the value  which has been changed and stores in locally
        updatedFormElement.touched = true;
  
        let ValidationResult = Validation(value, updatedFormElement.validationRules);
        // console.log(ValidationResult);
        updatedFormElement.valid = ValidationResult.valid; // change the valid  which has been changed and stores in locally

        if ((!updatedFormElement.valid) && updatedFormElement.touched) //for update the error message value
        {
          updatedFormElement.errorMsg = ValidationResult.errorMsg // change the errorMsg  which has been changed and stores in locally
        }
        else 
        {
          updatedFormElement.errorMsg = ''
        }
  
        updatedControls[name] = updatedFormElement; // change the local data where the change is happened
  
        let formIsValid = true;

        for (let inputIdentifier in updatedControls) 
        {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
  
        this.setState(
            {
                formControls: updatedControls, // here we change the global value according to local data
                formIsValid: formIsValid
            }
        );
  
    }

    formSubmitHandler = () => {
        const formData = {};
        const touched = {};
        const updatedControls = { ...this.state.formControls }; 
        let updatedFormElement = { };

        for (let formElementId in this.state.formControls) 
        {
            touched[formElementId] = this.state.formControls[formElementId].touched;
            formData[formElementId] = this.state.formControls[formElementId].value; // in formData{} stores only values of each datas
        }

        const delselect =  Object.keys(touched).filter((f) => touched[f] === false); 

        if(delselect.length !== 0){
            for(let object in delselect ){

                updatedFormElement = { ...updatedControls[delselect[object]] };
                updatedFormElement.errorMsg = `Oops you missed ${delselect[object]} !! `
                updatedControls[delselect[object]] = updatedFormElement;
            }
        }
        else {
            let newLine = '\r\n';
            alert(
            ` Name : ${formData.name}${newLine} Age : ${formData.age}${newLine} Email : ${formData.email}${newLine} Mobile : ${formData.mobile}${newLine} Address : ${formData.line1}, ${formData.line2}, ${formData.city}, ${formData.state}, ${formData.zipcode} - ${formData.country}${newLine} What would you use the library for : ${formData.radio}${newLine} Which sections of the library would you like access to : ${formData.checkbox}${newLine} About : ${formData.about} `
            );
        }

        this.setState(
            {
                formControls: updatedControls
            }
        ); 
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
                    placeholder={this.state.formControls.name.placeholder} //Enter Your Name
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
                    // name1={'age1'}
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

                <Buttong 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    // disabled={! this.state.formIsValid}
                /> { /*Submit */ }
                
                <Buttong
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