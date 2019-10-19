import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guest } from '../model/guest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseURL: string = '//localhost:8080/guest';
  private id:string;

  constructor(private http:HttpClient) {}

  createGuest(visit:Guest) : Observable<Guest>{
    let username='admin';
    let password='admin';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Guest>(this.baseURL + '/new', visit, {headers});

  }

  findGuestById(id:string) : Observable<Guest>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Guest>(this.baseURL + '/find/' + id, {headers});
  }

  updateGuest(visit:Guest) : Observable<Guest>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Guest>(this.baseURL + '/update', visit, {headers});

  }

  deleteVisit(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Guest[]>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Guest[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
