import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    trendingProduct: any
    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
            if (res) {
                this.trendingProduct = res["products"]
            }
        })
    }
}
