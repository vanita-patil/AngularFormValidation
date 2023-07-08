import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'FormValidation';
  defaultCountry='india';
  //@ViewChild('myForm') form: NgForm | undefined
  onSubmit(myForm)
  {
        console.log('Form Submitted!',myForm);
  }
  
}
