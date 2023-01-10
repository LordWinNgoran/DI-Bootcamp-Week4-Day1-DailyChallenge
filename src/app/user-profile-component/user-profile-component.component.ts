import { Component,OnInit } from '@angular/core';

class User {
  first_name!:string;
  last_name!:string;
  profilePictureUrl!:string
}
@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent implements OnInit {

user:User= {
  first_name :"Lordwin james",
  last_name:"N'goran",
  profilePictureUrl:"https://media.licdn.com/dms/image/D4E03AQEBOmPOvff9iQ/profile-displayphoto-shrink_200_200/0/1671783099289?e=1678924800&v=beta&t=bj6H7DAdyK8jV7NYHq4TXDbt6zmR24mocXtSV2jpV44",
}
constructor(){
}

ngOnInit(): void {
}

getFullName(){
  return this.user.first_name+' '+this.user.last_name
}

}