import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  patient: Guest = new Guest();
  submitted = false;

  constructor(private patientService:GuestService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.patient = new Guest();
  }


  save(){

    this.patientService.createGuest(this.patient).subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Guest();
  }

  onSubmit(){
    this.router.navigate(['/guests']);
    this.submitted = true;
    this.save();
   
  }

  cancel(){
    this.router.navigate(['/guests']);
  }

}
