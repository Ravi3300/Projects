import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    productId: any;
    productInfo: any
    constructor(private http: HttpClient, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productId = Number(params.get('id'));
            console.log(this.productId);
        });

        this.http.get(`https://dummyjson.com/products/${this.productId}`).subscribe((res: any) => {
            this.productInfo = res
        })
    }
}
