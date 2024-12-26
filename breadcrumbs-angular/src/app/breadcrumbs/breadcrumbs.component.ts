import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    fullUrl: any
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.fullUrl = this.router.url;
                console.log(this.fullUrl.split('/').filter((x:any) => {

                }))
            });
    }
}

