import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-main-body',
    templateUrl: './main-body.component.html',
    styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent {
    cardData: any;
    cardCount: number = 0;
    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('https://meme-api.com/gimme/20').subscribe((data: any) => {
            this.cardData = data['memes']
            this.cardCount = data['count']
        })
    }
}
