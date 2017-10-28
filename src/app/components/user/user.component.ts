import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies: string[];
  email:string;
  photos:Photos[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('Constructor ran... ');
  }

  ngOnInit() {
    console.log('ngInit ran...');
    this.name = 'Sunny Patel';
    this.age = 24;
    this.address={
      street:'University Avenue', 
      city:'Toronto', 
      state:'ON'
    }
    this.hobbies=['Learn new technologies', 'Read books', 'Long walks...'];
    this.email = 'sp2141@gmail.com';
    this.dataService.getPosts().subscribe((photos) => {
      this.photos = photos;
    });
  }

  onClick (hob) {
    if (this.hobbies.indexOf(hob) == -1) {
      this.hobbies.push(hob);
    } else {

    }
  }

  addHobby(hob) {
    if (this.hobbies.indexOf(hob) == -1) {
      this.hobbies.push(hob);
    }
    return false;
  }

  deleteHobby(hob) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hob) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;

  }
}

interface Address {
    street:string,
    city:string,
    state:string
}

interface Photos {
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:number
}