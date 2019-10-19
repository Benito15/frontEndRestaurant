import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest';
import { GuestService } from 'src/app/service/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

  patient:Guest;
  id:string;

  _patient: Guest = new Guest();
  submitted = false;

  constructor(private patientService:GuestService, private router:Router) { }

  ngOnInit() {
    this.getPatientToEdit();
  }

  getPatientToEdit(){
    this.id = this.patientService.getId();
    console.log(this.id);
    this.patientService.findGuestById(this.id).subscribe(data =>{

      this.patient = data;
      console.log(data);

    });
  }

  update(){
    this.patientService.updateGuest(this.patient).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/guests']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/guests']);

  }

}
