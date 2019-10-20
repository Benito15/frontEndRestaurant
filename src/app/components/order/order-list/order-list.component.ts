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

  private orders: Order[];
  private guests: Guest[];
  private items: Item[];

  id: string;

  constructor(private orderService: OrderService, private itemService: ItemService, private guestService: GuestService, private router: Router) { }

  ngOnInit() {

    this.getOrders();
    this.getGuests();
    this.getAllGuestsLinkedWithOrder();

  }

  getOrders() {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

  getGuests() {
    this.guestService.getAll().subscribe(guests => {
      this.guests = guests;
    });
  }

  getItems() {
    this.itemService.getAll().subscribe(items => {
      this.items = items;
    })
  }

  getAllGuestsLinkedWithOrder() {

    this.orderService.getAll().subscribe(orders => {
      
      this.orders = orders;

      this.guestService.getAll().subscribe(guests => {
        this.guests = guests;
        console.log(guests)

        for (var i = 0; i < orders.length; i++) {
          for (var j = 0; j < guests.length; j++) {
            if (orders[i].guestId == guests[j].guestID) {
              orders[i].guest = guests[j];
            }
          }
        }

      });

      this.itemService.getAll().subscribe(item => {
        this.items = item;

        for (var i = 0; i < orders.length; i++) {
          for (var j = 0; j < item.length; j++) {
            if (orders[i].empID == item[j].itemID) {
              orders[i].item = item[j];
            }
          }
        }

      });


    });

   
  }

  getAllItemsLinkedWithOrder() {

    this.orderService.getAll().subscribe(orders => {
      
      this.orders = orders;

     

    });
  }

  setActive() {
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('appointmentsLink').classList.add('active');
  }


}
