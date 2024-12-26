import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    productList: any = [
        {
            name: 'Product1',
            price: 100,
            id: 1
        },
        {
            name: 'Product2',
            price: 300,
            id: 2
        },
        {
            name: 'Product3',
            price: 400,
            id: 3
        },
        {
            name: 'Product4',
            price: 700,
            id: 4
        }
    ]

    constructor(private cartService: CartServiceService) { }

    addToCart(product: any) {
        console.log(product)
        this.cartService.addToCart(product)
        localStorage.setItem('cartItems', product)
    }

    ngOnInit() {

    }
}
