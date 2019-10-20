import { Guest } from './guest';
import { Item } from './item';

export class Order{
    orderID:string;
    guestId:string;
    empID:string;
    dte:string;
    total:number;
    guest:Guest;
    item:Item;
    itemID:string;
}