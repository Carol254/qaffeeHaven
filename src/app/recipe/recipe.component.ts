import { Component,Input,OnInit } from '@angular/core';
import { RecipeService,Recipe } from '../demo-services/recipe.service';
import { pwa } from 'pwafire';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes:Recipe[] = [];
  search:string = '';
  query:string = '';

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.loadRecipes();
  }


  loadRecipes(){
    this.recipeService.getCoffeeRecipes().subscribe( {
      next:(recipe:Recipe[])=>{
          this.recipes = recipe;
      },
      error:(err:any)=>{
        console.error('Error fetching recipes ',err);
      }
    } )
  }

  updateSearch(event:any){
    this.search = event.target.value;
  }

  getSearch(event:any){
    event.preventDefault();
    this.recipeService.query = this.search;
    this.search = '';
    this.loadRecipes();
  }

  share(recipe:any){
    const ShareData = {
      title: recipe.recipe.label,
      text: `Check out this recipe by the name: ${recipe.recipe.label}, The Dish Type is: ${recipe.recipe.dishType},The Cuisine Type is: ${recipe.recipe.cuisineType} `
    }
    pwa.Share(ShareData);
  }
}
