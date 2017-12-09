import { Component } from '@angular/core';

@Component({
	selector : 'app-server',
	templateUrl : 'server.component.html',
  	styleUrls: ['./server.component.css']
}) // this is just a decorator
export class ServerComponent {
	serverID: number = Math.floor(Math.random() * 90 + 10);
	status: string = 'Offline';

	constructor(){
		this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
	}

	public getStatus() : string {
		return this.status;
	}

	getClass(){
		return this.status === 'Online' ? 'm-3 p-3 bg-success' : 'm-3 p-3 bg-danger';
	}

	getColor(){
		return this.status === 'Online' ? 'white' : 'black';
	}
}