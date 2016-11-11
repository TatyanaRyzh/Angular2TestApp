import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'test-app',
    template: `
        <header-component></header-component>

        <validation-form></validation-form>

        <div class="date-range">
            Start date:
            <my-date-picker 
                [options]="datepicker_options" 
                (dateChanged)="onDateChanged('start_date', $event)">
            </my-date-picker>
            End date:
            <my-date-picker 
                [options]="datepicker_options"
                (dateChanged)="onDateChanged('end_date', $event)">
            </my-date-picker>
        <div>

        <grid-component [data]="data"></grid-component>
    `
})

@Injectable()
export class AppComponent {
    constructor(private http: Http) { }

    data: any[] = [];
    originalData: any[] = [];

    start_date = -Infinity;
    end_date = Infinity;

    datepicker_options = {
        height: '34px',
        width: '260px',
        selectionTxtFontSize: '12px'
    };

    ngOnInit() {
        this.getData();
    }

    onDateChanged(type, event) {
        let threshold = (new Date(event.date.year, event.date.month, event.date.day)).getTime();

        if (isNaN(threshold)) {
            this[type] = type === 'start_date' ? -Infinity : Infinity;
        } else {
            this[type] = threshold;
        }

        this.data = this.originalData.filter(item => {
            return ((new Date(item.start_date)).getTime() >= this.start_date) && ((new Date(item.end_date)).getTime() <= this.end_date);
        });
    }

    getData() {
        this.http.get('app/data.json')
            .map(res => {
                this.data = res.json();
                this.originalData = res.json();
            })
            .subscribe();
    }
}