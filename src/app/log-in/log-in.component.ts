import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../demo-services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

isSignedIn = false;

newUser:boolean = false;

constructor(public firebaseService:FirebaseService, private router:Router){}

  ngOnInit(): void {
      if(localStorage.getItem('user') !== null){
        this.isSignedIn = true;
      }else {
        this.isSignedIn = false;
      }
  }
  
async onSignIn(email:string, password:string){
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isloggedIn){
      this.isSignedIn = true;
      this.router.navigate(['home']);
    }
}

  
async onSignUp(email:string, password:string){
  await this.firebaseService.signUp(email,password)
  if(this.firebaseService.isloggedIn){
    this.isSignedIn = true;
  }
}

handleLogOut(){
  this.isSignedIn = false;
}

createAccount(){
  this.newUser = true;
}

signInInstead(){
  this.newUser = false;
}

}

