import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    data: any
    constructor(public cartService: CartServiceService) {
        this.data = this.cartService.getItems()
    }

    deleteCard(cardData: any) {
        this.cartService.deleteCard(cardData)
    }

    addQunatity(id: any) {
        this.cartService.increaseQuantity(id)
    }

    decreaseQunatity(id: any) {
        this.cartService.decreaseQunatity(id)
    }

    ngOnInit() {
        console.log(this.data, "dasss")
    }
}
