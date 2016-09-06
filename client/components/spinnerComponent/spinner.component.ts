'use strict';

import {Component, Input, OnDestroy} from '@angular/core';
//noinspection TypeScriptCheckImport
import template from "./spinner.component.html";

@Component({
    selector: 'line-spinner',
    template: template
})
export class SpinnerComponent implements OnDestroy {
    private currentTimeout: any;
    private isDelayedRunning: boolean = false;

    @Input()
    public delay: number = 300;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
        }
        else if (!this.currentTimeout) {
            this.currentTimeout = setTimeout(() => {
                this.isDelayedRunning = value;
                this.cancelTimeout();
            }, this.delay);
        }

    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}