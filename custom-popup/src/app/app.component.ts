import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'custom-popup';
    isVisible = false; // Control popup visibility

    close() {
        this.isVisible = false; // Hide the popup
    }

    popupOpen() {
        this.isVisible = true
    }
}
