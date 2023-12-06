import { Component,ElementRef,Input,OnInit, ViewChild } from '@angular/core';
import { RecipeService,Recipe} from '../demo-services/recipe.service';
import { pwa } from 'pwafire';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @ViewChild('cardText',{static:true}) cardText!:ElementRef;

  recipes:Recipe[] = [];
  search:string = '';
  query:string = '';


  copyData!: {
    title: string;
    label:string;
    cuisineType:string
  };


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
      text:`Check out this recipe by the name: ${recipe.recipe.label},
      \n The dish type is: ${recipe.recipe.dishType},
      \n The cuisine type is: ${recipe.recipe.cuisineType}
      `
    }
    pwa.Share(ShareData);
  }

  addToFav(recipe:Recipe){
    recipe.addedToFavourites = !recipe.addedToFavourites;
  }

  copyText(recipe:any){
    const textToCopy = `Recipe label: ${recipe.recipe.label}\nDish Type: ${recipe.recipe.dishType}\nCuisine Type: ${recipe.recipe.cuisineType}`;
    pwa.copyText(textToCopy);
}
}
