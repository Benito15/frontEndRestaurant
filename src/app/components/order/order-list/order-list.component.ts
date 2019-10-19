import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { GuestService } from 'src/app/service/guest.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private patients: Guest[] = [];
  private appointments:Order[] = [];
  private items: Item[] = [];
  id:string;

  constructor(private appointmentService:OrderService,private itemService:ItemService, private patientService:GuestService, private router:Router) { }

  ngOnInit() {
    this.getAppointments();
    this.getPatients();
    this.getAllPatientsLinkedWithAppointment();
    this.setActive();
    //this.getItemLinkedWithOrder();

  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    })
  }

  getAppointments(){

    this.appointmentService.getAll().subscribe(data => {
        this.appointments = data;
    })

  }

  getAllPatientsLinkedWithAppointment(){

    this.appointmentService.getAll().subscribe(appointments =>{

      this.appointments = appointments;

      this.patientService.getAll().subscribe(patients =>{

          this.patients = patients;

          for(var i = 0; i < appointments.length; i++){
             
            for(var j = 0; j < patients.length; j++){
              if(appointments[i].guestID == patients[j].guestID){
                appointments[i].guest = patients[j];
              }
            }
          }
      });

    });

  }

  getItemLinkedWithOrder(){

    this.itemService.getAll().subscribe(items =>{

      this.items = items;

      this.appointmentService.getAll().subscribe(patients =>{

          this.appointments = patients;

          for(var i = 0; i < items.length; i++){
             
            for(var j = 0; j < patients.length; j++){
              if(items[i].itemID == patients[j].itemID){
                patients[j].item= items[i];
              }
            }
          }
      });

    });

  }




  deleteAppointment(id:string) {
    this.appointmentService.deleteOrder(id).subscribe(

      data => {
       console.log(data);
       this.getAppointments();
      }
    );
  }

  viewAppoinement(id:string) {

    this.appointmentService.saveId(id);
    this.router.navigate(['guests/view']);
    

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('appointmentsLink').classList.add('active');
  }


}
