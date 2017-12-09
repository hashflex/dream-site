import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-toggle',
  templateUrl: './display-toggle.component.html',
  styleUrls: ['./display-toggle.component.css']
})
export class DisplayToggleComponent implements OnInit {

  isVisible = true;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleText(){
  	this.isVisible = !this.isVisible;
  	this.clicks.push(new Date());
  }

  getClass(count){
  	return count > 5 ? 'while-color' : '';
  }

  getbackgroundColor(count){
  	return count > 5 ? 'blue' : '';
  }

}
