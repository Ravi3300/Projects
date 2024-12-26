import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: any;
    selectedValue: string | undefined;
    selectedCar!: string;

    foods: any[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
        { value: 'abc-3', viewValue: 'Abc' },
        { value: 'def-4', viewValue: 'Def' },
        { value: 'ghi-5', viewValue: 'Ghi' },
    ];
    filterArray: any[] = [...this.foods];

    onInputChange(event: any) {
        const searchVal = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
        this.filterArray = this.foods.filter((data) =>
            data.viewValue.toLowerCase().includes(searchVal)
        );
        console.log(this.filterArray, "Filtered Array");
    }
}
