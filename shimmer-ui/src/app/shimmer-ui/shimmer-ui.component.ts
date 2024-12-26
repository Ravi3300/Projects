import { Component } from '@angular/core';

@Component({
    selector: 'app-shimmer-ui',
    templateUrl: './shimmer-ui.component.html',
    styleUrls: ['./shimmer-ui.component.scss']
})
export class ShimmerUiComponent {
    data = Array(20).fill(null);
}
