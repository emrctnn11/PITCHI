import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items$ = new BehaviorSubject<CartItem[]>([]);

    getCart() {
        return this.items$.asObservable();
    }

    addToCart(newItem: CartItem) {
        this.items$.next([... this.items$.getValue(), newItem]);
    }

    removeItem(id: number) {
        this.items$.next(this.items$.getValue().filter((item) => item.id == id));
    }
}