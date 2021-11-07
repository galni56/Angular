import { Component, OnInit } from '@angular/core';
import { IUserShort } from '../user';
import { NgForm } from '@angular/forms';

interface IUser extends IUserShort {
  age: number
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['../user-forms.component.css']
})

export class TemplateDrivenComponent implements OnInit {
  isFormSubmitted = false;
  user: IUser = {
    name: '',
    username: '',
    age: 18,
    email: '',
    phone: ''
  }

  ngOnInit(): void {
  }

  onSubmitForm(userForm: NgForm) {
    this.isFormSubmitted = true;
    this.user.name = userForm.value.name;
    this.user.username = userForm.value.username;
    this.user.age = userForm.value.age;
    this.user.email = userForm.value.email;
    this.user.phone = userForm.value.phone;
    userForm.reset();
  }

  onResetForm(userForm: NgForm) {
    this.isFormSubmitted = false;
    userForm.reset();
  }
}
