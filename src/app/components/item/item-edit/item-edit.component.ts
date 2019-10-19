import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  patient:Item;
  id:string;

  _patient: Item = new Item();
  submitted = false;

  constructor(private patientService:ItemService, private router:Router) { }

  ngOnInit() {
    this.getPatientToEdit();
  }

  getPatientToEdit(){
    this.id = this.patientService.getId();
    this.patientService.findItemById(this.id).subscribe(data =>{

      this.patient = data;


    });
  }

  update(){
    this.patientService.updateItem(this.patient).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/items']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/items']);

  }

}
