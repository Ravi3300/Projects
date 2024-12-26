import { Component } from '@angular/core';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';


@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
    currentStep: any = 1;
    isComplete: boolean = false;
    btnName: any = "Next";
    completeName: any = "Finish"

    componentArray: any[] = [
        {
            "name": "Step1",
            Component: Step1Component,
        },
        {
            "name": "Step2",
            Component: Step2Component,
        },
        {
            "name": "Step3",
            Component: Step3Component,
        },
        {
            "name": "Step4",
            Component: Step4Component,
        },
    ]

    constructor() {

    }

    handleNext() {
        if (this.currentStep <= this.componentArray.length) {
            this.currentStep++;
        }
    }
    calculateWidth(): string {
        return `${((this.currentStep - 1) / (this.componentArray.length - 1)) * 100}%`;
    }

    ngOnInit(): void {

    }
}
