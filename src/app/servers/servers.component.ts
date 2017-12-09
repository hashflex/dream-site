import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "Nothing yet";
  
  servers = ["server1", "server2"];

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {

  }

  onServerCreation(){
  	this.serverCreationStatus = "Server was created with the name "+ this.serverName;
    this.servers.push(this.serverName);
  }
  
}
