import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../demo-services/recipe.service';
import { Router} from '@angular/router';
import { FirebaseService } from '../demo-services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  search:string = '';

  isSignedIn = false;

  constructor(private recipeService:RecipeService,private router:Router, public firebaseService:FirebaseService){}

  updateSearch(event:any){
    this.search = event.target.value;
  }

  getSearch(event:any){
    event.preventDefault();
    this.recipeService.query = this.search;
    this.search = '';
    this.recipeService.getCoffeeRecipes();
    this.router.navigate(['dashboard/recipe']);
  }

  handleLogOut(){
    this.firebaseService.logOut();
  }

}
