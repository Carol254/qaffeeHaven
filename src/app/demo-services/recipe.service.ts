import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Recipe{
  recipe:{
    label: string,
    image: string,
    ingredients: any [],
    cuisineType: string,
    dishType:string
  }
  addedToFavourites?: boolean; 
}


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes:Recipe[] = [];
  search:string = '';
  query:string = 'coffee';
  
  

  constructor(private http:HttpClient) { }


  getCoffeeRecipes():Observable<Recipe[]>{
  return this.http.get(`${environment.EDAMAN_API_URL}/search?q=${this.query}&app_id=${environment.EDAMAN_APP_ID}&app_key=${environment.EDAMAN_APP_KEY}`).pipe(
    map((data:any) =>{
      this.recipes = data.hits;
      console.log(this.recipes);
      return this.recipes;
    })
  );
  }

  updateSearch(event:any){
    this.search = event.target.value;
  }
}
