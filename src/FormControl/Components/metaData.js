export let initialState =   {
        
    name : { 
        type: 'text',
        value: '',
        placeholder: 'Enter Your Name',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 4,
          maxLength: 8,
          isRequired: true,
         },
      },

      age : {  
        type: 'number',
        value: '',
        placeholder: 'Enter Your Age',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 1,
          maxLength: 2,
          isRequired: true,
          isNumber: true
         },
      },

      gender: {
        type: 'radio',
        value: '',
        placeholder: 'Gender',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: 'Male', displayValue: 'Male' },
          { value: 'Female', displayValue: 'Female'}
        ]
      },

      email: {
        type: 'text',
        value: '',
        placeholder: 'Enter Email ID',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
          isEmail: true
        },
      },

      mobile : {  
        type: 'number',
        value: '',
        placeholder: 'Enter Your Mobile Number',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          maxLength: 12,
          isRequired: true,
          isNumber: true
        },
      },

      address: {
        line1: {
            type: 'text',
            value: '',
            placeholder: 'Address Line 1',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 2,
                isRequired: true
            }
        },
        line2: {
            type: 'text',
            value: '',
            placeholder: 'Address Line 2',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
            minLength: 4,
            isRequired: true
            }
        },
        city: {
            type: 'text',
            value: '',
            placeholder: 'City',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isRequired: true
            }
        },
        state: {
            type: 'text',
            value: '',
            placeholder: 'State',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isRequired: true
            }
        },
        zipcode: {
            type: 'number',
            value: '',
            placeholder: 'Zipcode',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 6,
                isRequired: true
            }
        },
        country: {
            type: 'select',
            value: [],
            placeholder: 'Country',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
              isRequired: true,
            },
            multiple: true,
            options: [
              { value: 'India', displayValue: 'India' },
              { value: 'Australia', displayValue: 'Australia'},
              { value: 'China', displayValue: 'China'},
              { value: 'USA', displayValue: 'USA'}
            ]
          }
      },

      radio: {
        type: 'radio',
        value: '',
        placeholder: 'What would you use the library for?',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
            isRequired: true,
        },
        options: [
          { value: 'Reference', displayValue: 'Reference' },
          { value: 'In-house reading', displayValue: 'In-house reading' },
          { value: 'Borrowing', displayValue: 'Borrowing' }
        ]
      },

      checkbox: {
        type: 'checkbox',
        value: [],
        placeholder: ' Which sections of the library would you like access to?',
        valid: false,
        errorMsg: '',
        touched: false,     
        validationRules: {
            isRequired: true,
        },
        options: [
          { value: 'Magazines', displayValue: 'Magazines' },
          { value: 'Fiction', displayValue: 'Fiction' },
          { value: 'Non-Fiction', displayValue: 'Non-Fiction' },
          { value: 'Electronic', displayValue: 'Electronic' },
          { value: 'Research & Reference', displayValue: 'Research & Reference' }
        ]
      },
      about: {
        type: 'textarea',
        value: '',
        placeholder: 'Tell About Yourself...',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          isRequired: true
        },
      },
  };