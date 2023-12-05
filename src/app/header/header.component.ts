import { Component } from '@angular/core';
import { RecipeService } from '../demo-services/recipe.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  search:string = '';

  constructor(private recipeService:RecipeService,private router:Router){}

  updateSearch(event:any){
    this.search = event.target.value;
  }

  getSearch(event:any){
    event.preventDefault();
    this.recipeService.query = this.search;
    this.search = '';
    this.recipeService.getCoffeeRecipes();
    this.router.navigate(['/recipe']);
  }

}
