import { Component } from '@angular/core';

@Component({
	selector : 'app-server',
	templateUrl : 'server.component.html',
  	styleUrls: ['./server.component.css']
}) // this is just a decorator
export class ServerComponent {
	serverID: number = 10;
	status: string = 'Offline';

	public getStatus() : string {
		return this.status;
	}
}