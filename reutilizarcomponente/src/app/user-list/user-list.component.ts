import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names:any=[];

  constructor() { 

     this.names=["Ronaldo1","Ronaldo2", "Ronaldo3"]
               
      }
  

  ngOnInit() {
  }

}
