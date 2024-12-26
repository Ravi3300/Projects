import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
