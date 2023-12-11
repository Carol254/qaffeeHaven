import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../demo-services/recipe.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Recipe[] = [];

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts(){
    this.recipeService.getCoffeeRecipes().subscribe({
      next:(product:Recipe[])=>{
        this.products = product;
      },
      error:(err)=>{
        console.error('Error fetching products', err);
      }
    })
  }

}
