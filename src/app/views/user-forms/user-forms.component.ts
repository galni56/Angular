import { Component, OnInit } from '@angular/core';
import { IUserShort } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IUser extends IUserShort {
  age: number
}

@Component({
  selector: 'app-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})

export class UserFormsComponent implements OnInit {
  isFormSubmitted = false;

  user: IUser;
  formReactive: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.user = {
      name: '',
      username: '',
      age: 18,
      email: '',
      phone: ''
    }

    this.formReactive = fb.group({
      "name": [this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[a-zA-Zа-яА-Я]*')
      ]],
      "username": [this.user.username, [
        Validators.required,
        Validators.minLength(1)
      ]],
      "age": [this.user.age],
      "email": [this.user.email, [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]],
      "phone": [this.user.phone, [
        Validators.required,
        Validators.pattern('^\\+38\\d{3}\\d{7}$')
      ]]
    })
  }

  ngOnInit(): void {
  }

  onFormSubmit(e: any) {
    this.isFormSubmitted = true;
    this.user.name = this.formReactive.value.name;
    this.user.username = this.formReactive.value.username;
    this.user.age = this.formReactive.value.age;
    this.user.email = this.formReactive.value.email;
    this.user.phone = this.formReactive.value.phone;
    this.formReactive.reset()
  }

  getValidationClass(field: string): string {
    return this.formReactive.controls[field].invalid && !this.formReactive.controls[field].pristine
      ? 'error'
      : '';
  }

  resetForm() {
    this.formReactive.reset();
  }

}
