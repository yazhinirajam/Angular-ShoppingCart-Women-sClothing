import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
    });
  }

  passwordValidator(control: { value: string; }) {
    const value = control.value;
    const hasNumber = /\d{2,}/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasNumber && hasSpecial;
    return valid ? null : { passwordInvalid: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
   
      console.log(this.registrationForm.value); 

    
      this.router.navigate(['/womens-shopping']);
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

 
  getFormControl(name: string) {
    return this.registrationForm.get(name);
  }
}
