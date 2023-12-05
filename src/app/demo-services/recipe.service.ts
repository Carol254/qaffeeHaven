import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Recipe{
  recipe:{
    label: string,
    image: string,
    ingredients: any [],
    cuisineType: string,
    dishType:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes:Recipe[] = [];
  search:string = '';
  query:string = 'coffee';
  
  private readonly APP_ID = 'f993ad04';
  private readonly APP_KEY = '56c50ea914dd331dab3aa5705990d2a5';

  constructor(private http:HttpClient) { }


  getCoffeeRecipes():Observable<Recipe[]>{
  return this.http.get(`https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`).pipe(
    map((data:any) =>{
      this.recipes = data.hits;
      return this.recipes;
    })
  );
  }

  updateSearch(event:any){
    this.search = event.target.value;
  }
}
