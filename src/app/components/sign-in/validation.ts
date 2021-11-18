
export class formErrors {
  fname:string="";
  lname:string="";
  bday:string="";
  gender:string="";
  city:string ="";
  email:string="";
  phoneNumber:string="";
};
export class validationMessage{
  fname:object = {
    'required': 'First Name is required.',
    'minlength': 'First Name must be greater than 2 characters.',
    'maxlength': 'First Name must be less than 10 characters.'

  };
  lname: object={
    'required': 'Last Name is required.',
    'minlength': 'Last Name must be greater than 2 characters.',
    'maxlength': 'Last Name must be less than 10 characters.'

  };
  phoneNumber:object={
    'required': 'Phone number e is required.',
    'maxlength': 'Phone number must have 10 or 12 characters.'

  }
    
}

