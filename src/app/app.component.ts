import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './demo-services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'qaffee-haven';

  isSignedIn = false;

  constructor(private firebaseService: FirebaseService){}

  ngOnInit(): void {
    this.firebaseService.firebaseAuth.authState.subscribe((user) => {
      this.isSignedIn = !!user;
    });
  }

}
