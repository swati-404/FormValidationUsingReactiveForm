import { Component, Input, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formErrors, validationMessage } from './validation';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signupForm!: FormGroup;
  validationMessage = new validationMessage();
  formErrors =new formErrors();

  constructor(private fb: FormBuilder) {

  }
  // validationMessage:any=  {
  //   'fname': {
  //     'required': 'First Name is required.',
  //     'minlength': 'First Name must be greater than 2 characters.',
  //     'maxlength': 'First Name must be less than 10 characters.'
  //   },
  //   'lname': {
  //     'required': 'Last Name is required.',
  //     'minlength': 'Last Name must be greater than 2 characters.',
  //     'maxlength': 'Last Name must be less than 10 characters.'
  //   },
  //   'phoneNumber':{
  //     'required': 'Phone number e is required.',
  //     'maxlength': 'Phone number must have 10 or 12 characters.'
  //   }
  // };
  // formErrors: any = {
  //   'fname': '',
  //   'lname': '',
  //   'bday': '',
  //   'gender':'',
  //   'city':'', 
  //   'email':'',
  //   'phoneNumber':''
  // };
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      bday: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]]

    });
    this.signupForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.signupForm);
    })
  }

  logValidationErrors(group: FormGroup = this.signupForm): void {

    Object.keys(group.controls).forEach((key: string) => {

      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        (this.formErrors as any )[key]= '';
        console.log(key);
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = (this.validationMessage as any)[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              (this.formErrors as any)[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }


  onSubmit(): void {
    console.log(this.signupForm.value)
  }
  onLoadDataClick(): void {
    // this.logValidationErrors(this.signupForm);
    // this.signupForm.patchValue({
    //   fname:"test",
    //   lname: "Test",
    //   bday: "26/06/1996",
    //   gender:"female",
    // city:"2",
    // email:"test@gmail.com",
    // phoneNumber:"1111111111"
    // })
  }
  get f() { return this.signupForm.controls; }
  clickbtn() {
    console.log(this.signupForm.value)
    this.signupForm.reset();
  }

}
