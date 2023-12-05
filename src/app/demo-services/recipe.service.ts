import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  
  private readonly APP_ID = '';
  private readonly APP_KEY = '';

  constructor(private http:HttpClient) { }


  getCoffeeRecipes(){
    this.http.get(`https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`).subscribe((data:any) =>{
      this.recipes = data.hits;
      console.log(data.hits);
    })
  }

  updateSearch(event:any){
    this.search = event.target.value;
  }

  getSearch(event:any){
    event.preventDefault();
    this.query = this.search;
    this.search = '';
    this.getCoffeeRecipes();

  }


}
