import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    pageData: any;
    page: any = '1';
    totalPage: any;
    constructor(private http: HttpClient) {

    }

    getPaginationData(): void {
        this.http.get('https://dummyjson.com/products?limit=100').subscribe((res: any) => {
            if (res) {
                this.pageData = res?.products;
            }
        })
    }

    getPage(): number[] {
        const totalPages = Math.ceil(this.pageData.length / 10);
        const pages: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        console.log(pages, "sdfdsfds")
        return pages;
    }

    setNextPage(i: any) {
        this.page = i;
    }

    prevPage(): void {
        if (this.page > 1) {
            this.page--;
        }
    }

    nextPage(): void {
        const totalPages = Math.ceil(this.pageData.length / 10);
        if (this.page < totalPages) {
            this.page++;
        }
    }


    ngOnInit(): void {
        this.getPaginationData();
    }
}
