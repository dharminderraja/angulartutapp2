import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public angularFire:AngularFireDatabase
  ) { 
    this.clients = this.angularFire.list('/clients/clients') as FirebaseListObservable<Client[]>;
  }

  getClients(){
    return this.clients;
  }

  newClient(client:Client){
    this.clients.push(client);
  }

  getClient(id:string){
    this.client = this.angularFire.object('/clients/clients/'+id) as FirebaseObjectObservable<Client>;
    return this.client;
  }

  updateClient(id:string, client:Client){
    return this.clients.update(id, client);
  }

  deleteClient(id:string){
    return this.clients.remove(id);
  }

}
