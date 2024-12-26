import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-countdowntimer',
    templateUrl: './countdowntimer.component.html',
    styleUrls: ['./countdowntimer.component.scss']
})
export class CountdowntimerComponent {
    @ViewChild('hour') hourInputReference!: ElementRef;
    @ViewChild('minute') minuteInputReference!: ElementRef;
    @ViewChild('sec') secInputRef!: ElementRef;
    @ViewChild('start') startInputReference!: ElementRef;
    @ViewChild('stop') stopInputReference!: ElementRef;
    @ViewChild('reset') resetInputRef!: ElementRef;
    constructor() {

    }

    startBtn() {
        console.log(this.hourInputReference.nativeElement.value);
        if (this.hourInputReference.nativeElement.value == '0' && this.minuteInputReference.nativeElement.value == '0' && this.secInputRef.nativeElement.value == '0') {
            return;
        }
        this.setTimer();
    }

    setTimer() {
        this.startInputReference.nativeElement.style.display = "none";
        this.stopInputReference.nativeElement.style.display = "initial";

        let countDownTimer = setInterval(() => {
            this.timer()
        }, 1000)
    }

    timer() {
        if (this.hourInputReference.nativeElement.value == '0' && this.minuteInputReference.nativeElement.value == '0' && this.secInputRef.nativeElement.value == '0') {
            this.hourInputReference.nativeElement.value = "";
            this.minuteInputReference.nativeElement.value = "";
            this.secInputRef.nativeElement.value = "";
            this.stopInterval()
        } else if (this.secInputRef.nativeElement.value != 0) {
            this.secInputRef.nativeElement.value = `${this.secInputRef.nativeElement.value <= 10 ? "0" : ""}${this.secInputRef.nativeElement.value - 1}`
        } else if (this.minuteInputReference.nativeElement.value != '0' && this.secInputRef.nativeElement.value == 0) {
            this.secInputRef.nativeElement.value = 59
            this.minuteInputReference.nativeElement.value = `${this.minuteInputReference.nativeElement.value <= 10 ? "0" : ""}${this.minuteInputReference.nativeElement.value - 1}`
        }else if (this.minuteInputReference.nativeElement.value != '0' && this.secInputRef.nativeElement.value == 0) {
            this.secInputRef.nativeElement.value = 59
            this.minuteInputReference.nativeElement.value = `${this.minuteInputReference.nativeElement.value <= 10 ? "0" : ""}${this.minuteInputReference.nativeElement.value - 1}`
        }
    }

    stopInterval() {

    }

    pauseBtn() {

    }

    resetBtn() {

    }

    ngOnInit() {

    }
}


