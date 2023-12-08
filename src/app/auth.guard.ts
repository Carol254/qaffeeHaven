// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from './demo-services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(): boolean {
    if (this.firebaseService.isloggedIn) {
      return true;
    } else {
      this.router.navigate(['/log-in']);
      return false;
    }
  }
}
