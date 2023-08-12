import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message : string = '';
  username: string = '';
  password: string = '';
  error: boolean = false;


  constructor(private _userService: UserService){}


  login(){
  this.error = false;
 const userAuth = this._userService.login({username :this.username, password:this.password});
 console.log(userAuth)
    if (userAuth == false){
      this.message = 'Login failed '
      this.error = true;
      }else {
        this.message = 'Login successful'
        this.error = false;
      }
 
  
  }



}
