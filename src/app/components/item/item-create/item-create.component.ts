import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  patient: Item = new Item();
  submitted = false;

  constructor(private patientService:ItemService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.patient = new Item();
  }


  save(){

    this.patientService.createItem(this.patient).subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Item();
  }

  onSubmit(){
    this.router.navigate(['/items']);
    this.submitted = true;
    this.save();
   
  }

  cancel(){
    this.router.navigate(['/items']);
  }

}
