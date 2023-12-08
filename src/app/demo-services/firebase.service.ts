import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

//sign in with email && password
  async signIn(email:string , password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res =>{
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigate(['dashboard']);
    })
  }

  //sign up with email && password
  async signUp(email:string , password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigate(['login']);
    })
  }

  //log out
  async logOut(){
    await this.firebaseAuth.signOut().then(res =>{
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }


  //check if user isLoggedIn
  
  checkLogInStatus():boolean{
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

  //Google Authentication

  GoogleAuth(){
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: firebase.auth.AuthProvider){
    return this.firebaseAuth.signInWithPopup(provider).then((result)=>{
      console.log('You have been successfully logged In');
    }).catch((error) =>{
      console.log(error);
    });

  }
}
