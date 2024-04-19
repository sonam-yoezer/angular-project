import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
  
})
export class AppontmentComponent{

  formClass = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    num: new FormControl('', Validators.pattern(/^\+975-\d{8}$/)),
    appd: new FormControl('', Validators.required),
    sdepartment: new FormControl('', Validators.required),
    doctor: new FormControl('', Validators.required),
    message: new FormControl('',),
  });

  department = ['Critical Care', 'Emergency Department', 'Radiology', 'Nursing', 'General Surgery', 'Medicine'];
  doctors = ['Dr.Jigme', 'Dr.Pema', 'Dr.Dorji', 'Dr.Sonam'];



  Submition(){
    console.log(this.formClass.value);
    alert('Appointment Booked Sucessfully');
  }


}
