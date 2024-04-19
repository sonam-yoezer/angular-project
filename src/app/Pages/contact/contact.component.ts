import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
formMessage = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', Validators.email),
  subject: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
});

onSubmit(){
  console.log(this.formMessage.value);
}
}
