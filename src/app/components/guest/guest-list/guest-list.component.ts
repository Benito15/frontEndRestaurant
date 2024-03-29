import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest';
import { GuestService } from 'src/app/service/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  private patients: Guest[];

  private patient:Guest;
  id:string;

  constructor(private patientService:GuestService, private router:Router) { }

  ngOnInit() {
    this.getPatients();
    this.setActive();
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
      console.log(data);
    });
  }

  deletePatient(id:string) {
    this.patientService.deleteVisit(id).subscribe(

      data => {
       console.log(data);
       this.getPatients();
      }
    );
  }

  editPatient(id:string) {
    console.log(id);
    this.patientService.saveId(id);
    this.router.navigate(['/guests/edit']);
    

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.add('active');
    document.getElementById('visitsLink').classList.remove('active');
  }

}
