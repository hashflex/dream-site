import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  userName = "";
  addedUserName = "";
  errorMessage = "";
  successMessage = "User will be displayed here";
  hasError = false;

  constructor() { }

  ngOnInit() {
  }
  
  clearPage(){
  	this.errorMessage = "";
  	this.successMessage = "";
  	this.addedUserName = "";
  }

  validate(event){
  	var value = event.target.value;
  	this.clearPage();
  	this.validateValue(value);
  }

  validateValue(value){
  	
  	if (!value) {
  		this.hasError = true;
  		this.errorMessage = "Field can not be empty";
  		return;
  	}

  	if (/\s/.test(value)) {
  		this.hasError = true;
  		this.errorMessage = "Field can not have spaces";
  		return;
	}

	this.hasError = false;
  }

  onUserAdd(){
  	this.validateValue(this.userName);
  	if(!this.hasError){
  		this.clearPage();
  		this.successMessage = "User has been added : ";
  		this.addedUserName = this.userName;
  	}
  }

  resetUser(){
  	this.clearPage();
  	this.addedUserName = "";
  	this.userName = "";
  }
}
