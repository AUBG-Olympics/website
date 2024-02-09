import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {
  public sendEmail() {
    const templateParams = {
      name: 'James',
      notes: 'Check this out!',
    };
    emailjs.init('ru0StxIRgzPLtQmCw')
    emailjs
      .send('service_k3wfiqz', 'template_1jjdovf',{
        from_name:"men",
        to_name:"tedo",
        from_email:"testemail@gmail.com",
        subject:'test',
        message:'pls poluchi go'
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
