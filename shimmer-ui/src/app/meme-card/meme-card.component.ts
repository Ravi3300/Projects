import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-meme-card',
    templateUrl: './meme-card.component.html',
    styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent {
    @Input() cardData: any
    constructor() {

    }

    ngOnInit(): void {
        console.log(this.cardData)
    }
}
