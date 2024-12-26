import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartServiceService {
    items: any[] = [];
    constructor() { }

    addToCart(product: any) {
        console.log("dsacsad")
        this.items.push({ ...product, quantity: 1 })
        console.log(this.items, "it")
    }

    getItems() {
        console.log(this.items, "items")
        return this.items
    }

    deleteCard(cardData: any) {
        this.items = this.items.filter((data) => data.id !== cardData.id)
    }

    increaseQuantity(id: any) {
        let item = this.items.find((data: any) => data.id == id);
        if (item) {
            item.quantity++
            console.log(item, '++')
        }
    }
    
    decreaseQunatity(id: any) {
        let item = this.items.find((data: any) => data.id == id);
        if (item) {
            item.quantity--
            console.log(item, '---')
        }
    }

    getTotal() {
        return this.items.reduce((acc, item) => {
            if (acc + item.price * item.quantity > 0) {
                return acc + item.price * item.quantity
            } else {
                return 0
            }

        }, 0)
    }

}
