import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  private patients: Item[];

  private patient:Item;
  id:string;

  constructor(private patientService:ItemService, private router:Router) { }

  ngOnInit() {
    
    this.getPatients();
    this.setActive();

  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id:string) {
    this.patientService.deleteItem(id).subscribe(

      data => {
       console.log(data);
       this.getPatients();
      }
    );
  }

  editPatient(id:string) {
this.patientService.saveId(id);
    this.router.navigate(['/items/edit']);
    

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.add('active');
    document.getElementById('visitsLink').classList.remove('active');
  }


}
