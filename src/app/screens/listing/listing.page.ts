import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.module';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
    
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Tüm Yemekler',
        image: 'assets/images/all.png',
        active: true,
      },

      {
        id: 2,
        label: 'Burger',
        image: 'assets/images/burger.png',
        active: false,
      },

      {
        id: 3,
        label: 'Tabaklar',
        image: 'assets/images/dishes.png',
        
        active: false,
      },

      {
        id: 4,
        label: 'Pideler',
        image: 'assets/images/pide.png',
        active: false,
      },
      
    ];
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }

}
