import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-pagination-backend',
    templateUrl: './pagination-backend.component.html',
    styleUrls: ['./pagination-backend.component.scss']
})
export class PaginationBackendComponent {
    pageData: any;
    page: any = '1';
    totalPage: any;

    constructor(private http: HttpClient) {

    }

    getPaginationData(): void {
        this.http.get(`https://dummyjson.com/products?limit=10&skip=${this.page * 10 - 10}`).subscribe((res: any) => {
            if (res) {
                this.pageData = res?.products;
                this.totalPage = res?.total
            }
        })
    }

    getPage() {
        let pageCount = Math.ceil((this.totalPage) / 10);
        let page = [];
        for (let i = 1; i < pageCount; i++) {
            page.push(i)
        }
        return page;
    }

    prevPage() {
        if (this.page > 1) {
            this.page--;
            this.getPaginationData();
        }
    }

    setNextPage(i: any) {
        this.page = i;
        console.log(this.page)
        this.getPaginationData();
    }

    nextPage() {
        let pageCount = Math.ceil((this.totalPage) / 10);
        if (this.page < pageCount) {
            this.page++
            this.getPaginationData();
        }
    }


    ngOnInit(): void {
        this.getPaginationData();
    }
}



