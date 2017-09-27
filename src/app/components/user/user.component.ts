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
  post:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('Constructor ran... ');
  }

  ngOnInit() {
    console.log('ngInit ran...');
    this.name = 'John Doe';
    this.age = 30;
    this.address={
      street:'Saintsbury', 
      city:'Brampton', 
      state:'ON'
    }
    this.hobbies=['code', 'read', 'watch stuff'];
    this.email = 'johndoe@jd.com';
    this.dataService.getPosts().subscribe((posts) => {
      this.post = posts;
    });
  }

  onClick () {
    this.name = 'clicked name';
    this.hobbies.push('new hobby');
  }

  addHobby(hob) {
    this.hobbies.unshift(hob);
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

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}