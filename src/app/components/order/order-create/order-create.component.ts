import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { ItemService } from 'src/app/service/item.service';
import { GuestService } from 'src/app/service/guest.service';
import { Guest } from 'src/app/model/guest';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  order: Order = new Order();
  submitted = false;
  durations: String[] = ['15 min', '30 min', '1 hr', '2 hr', '3 hr', '4 hr'];

  private guests: Guest[];
  private items: Item[];
  item: Item = new Item();

  guest:Guest = new Guest();



  days: String[] = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30'
  ];

  months: String[] = [
    'Oct', 'Nov', 'Dec'
  ];

  years: String[] = [
    '2019' 
  ];

  day:string;
  month:string
  year:string;

  constructor(private router:Router, private appointmentService:OrderService, private patientService:GuestService, private itemService:ItemService) { }

  ngOnInit() {
    this.getPatients();
    this.getItems();
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.guests = data; 
    });
  }

  getItems(){
    this.itemService.getAll().subscribe(data => {
      this.items = data; 
    });
  }

  newAppointment() : void{
    this.submitted = false;
    this.order = new Order();
  }

  save(){

    this.order.dte = this.getFullDate();
    this.appointmentService.createOrder(this.order).subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
  }


  getPatient(value:string){

    if(value != '-1'){
      this.order.guestId = value;
    
      console.log(value);
    }
    else{
      console.log(value);
    }

  }

  getItem(value:string){
    if(value != '-1'){
      this.order.empID = value;
      console.log(value);
    }
    else{
      console.log(value);
    }
  }


  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/orders']);
  }

  cancel(){
    this.router.navigate(['/orders']);
  }


  getDay(value:string){

    if(value != '-1'){
      console.log(value);
      this.day = value;
    }

  }

  getMonth(value:string){

    if(value != '-1'){
      console.log(value);
      this.month = value;
    }

  }

  getYear(value:string){

    if(value != '-1'){
      console.log(value);
      this.year = value;
    }

  }

  getFullDate() : string{
    return this.day + ' ' + this.month + ' ' + this.year;
  }


}
