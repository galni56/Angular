import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  userDate = '12/04/1901';
  phoneNum = '+405650545';

  userAdresa = {
    streetNum:'Pushkina',
    houseNum :'Kolotushkina'
  }

  getName = () => {
    return this.userDate;
  }
   getAlert() {
    alert('test')
   }
  isButtonDisabled = true
  imgUrl = "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  changed(value: any) {
    console.log(value);
    console.log('changed', value.target.value)
    this.title = value.target.value;
  }



}
