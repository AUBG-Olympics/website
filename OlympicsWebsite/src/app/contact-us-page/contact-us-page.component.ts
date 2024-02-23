import { Component, Input, input, ViewEncapsulation,ViewChild } from '@angular/core';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,NavigationComponent],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContactUsPageComponent {
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  constructor(private formBuilder: FormBuilder){}  
  emailForm = this.formBuilder.group({
    name: '',
    email: '',
    text:''
  });

  nameError='';
  emailError='';
  textError='';

  public validate(){
    this.nameError='';
    this.emailError='';
    this.textError=''
    console.log('^\S+@\S+\.\S+$');
    let regex = new RegExp(/^\S+@\S+\.\S+$/);
    let match = regex.test(String(this.emailForm.value.email));
    if(this.emailForm.value.name!=""&&this.emailForm.value.text!=""&&match)
    {
      this.sendEmail(String(this.emailForm.value.name),String(this.emailForm.value.email),String(this.emailForm.value.text));
    }
    else {
      if(this.emailForm.value.name=="")
      this.nameError="Please enter a name";
      if(!match)
      this.emailError="Please enter a valid email";
      if(this.emailForm.value.text=="")
      this.textError="Please enter a message"
    }
  }

  public sendEmail(name:string,email:string,text:string) {
    emailjs.init('ru0StxIRgzPLtQmCw')
    emailjs
      .send('service_k3wfiqz', 'template_1jjdovf',{
        from_name:name,
        to_name:"Olympics",
        from_email:email,
        subject:'test',
        message:text
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  }
}
