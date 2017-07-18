import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  id:number;
  email:string;
  address:Address;
  hobbies:string[];
  company:string;
  posts:Post[];
  isEdit=false;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = 'Saravanan Vaiyapuri';
    this.id = 51679384;
    this.email =  "svaiyapuri@ssc.com";
    this.company= "Photon";
    this.address = {
      street: '261 Hayward St',
      apt: 99,
      city: 'Braintree',
      state: 'MA'
    }
    this.hobbies = ['watching movies', 'readig new tech stack'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick()
  {
    this.company = "HCL America Inc.,";
    this.hobbies.push("listen to Raja music");
  }

  addHobby(hobby)
  {
    this.hobbies.unshift(hobby);
    return false;
  }

  toggleEdit()
  {
    this.isEdit=!this.isEdit;
  }
}

interface Address
{
  street:string,
  apt:number,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId:number
}