import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  currentUser = new  BehaviorSubject<User | null>(null);

  constructor() { }

  users = new BehaviorSubject<User[]>(
    [
      {username : 'a', password: '1'},
      {username : 'myUserName', password: 'myPassword'},

    ]
  ); 


  login(user: User) {
    const userFound = this.users.value.find(
      userInDatabase => userInDatabase.username === user.username && userInDatabase.password === user.password);
      if (userFound) {
 
    
        this.setCurrentUser(userFound)
        return true;
      }
 
      return false;
  }

  setCurrentUser(user: User) {
     this.currentUser.next(user);
  }

  adminLoggedIn(): boolean {
   
    return !!this.currentUser.value;
  }

}
