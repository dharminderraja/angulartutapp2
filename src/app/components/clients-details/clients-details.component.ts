import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasBalance:boolean = false;
  showBalanceUpdateInput:boolean = false;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    // Get client id from link
    this.id = this.route.snapshot.params['id'];
    // Get client of the client id
    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0){
        this.hasBalance = true;
      }
      this.client = client;
    });
    
  }

  updateBalance(id:string){
    // Update the balance of the client
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', {cssClass: 'alert-success', timeout: 4000});
    this.showBalanceUpdateInput = false;
    this.router.navigate(['/client/'+this.id]);
  }

  onDeleteClick(){
    if (confirm("Are you sure to delete this action is irreversible?")){
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client Deleted', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }

  

}
