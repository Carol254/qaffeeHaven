import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  goToProducts(){
    this.router.navigate(['/products']);
  }

}
