import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm = this.formBuilder.group({
    clientNumber: new FormControl('',Validators.required),
    people:new FormControl('',Validators.required)
  })

  constructor(private formBuilder:FormBuilder){}

  onSubmit(){
    console.log(this.bookingForm.value);
    window.alert('The form is submitted successfully');
  }

}
