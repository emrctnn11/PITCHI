import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable ({
  providedIn: 'root'
})
export class FoodService {
  getFoods(): Food[]{
      return [
          {
            id: 1,
            title: 'Pizza',
            price: 35,
            image: 'assets/images/pizzamenu.png',
            description:
              'Taze sucuk, mantar, zeytin, domates, sosis, salamlı bol kaşarlı Pizza' 
          },
          {
            id: 2,
            title: 'Chicken',
            price: 55,
            image: 'assets/images/chickenmenu.png',
            description:
              'Köri soslu, kırmızı biberli tava tavuk' 
          },
          {
            id: 3,
            title: 'Hot Dog',
            price: 5,
            image: 'assets/images/hotdogmenu.png',
            description:
              'Sokak lezzetlerini aratmayan bir HOTDOG' 
          },
          {
            id: 4,
            title: 'Sushi',
            price: 90,
            image: 'assets/images/sushimenu.png',
            description:
              'Japon cheflerimiz tarafından hazırlanılan somon sushi' 
          },
          {
            id: 5,
            title: 'Beyti',
            price: 25,
            image: 'assets/images/beytimenu.png',
            description:
              'Türk usulü hazırlanan Beyti Kebap' 
          },
          {
            id: 6,
            title: 'Hamburger',
            price: 20,
            image: 'assets/images/hamburgermenu.png',
            description:
              '120GR Izgarada pişirilmiş, karamelize soğanlı Hamburger' 
          },
          
          
          

      ];
  }
  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id == id);
}
}