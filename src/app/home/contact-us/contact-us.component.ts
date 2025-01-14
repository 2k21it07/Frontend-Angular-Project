import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 
    message: string | null = null;
    onSubmit() {
      alert('Form submitted ');
      alert(' Thanks For Submittion');
    }
  }
  
    

