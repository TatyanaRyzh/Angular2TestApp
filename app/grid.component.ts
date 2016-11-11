import { Component, Input } from '@angular/core';

@Component({
    selector: 'grid-component',
    template: `
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr class="click-headers">
                        <th [ngStyle]="setSortedStyle('city')" (click)="setSortedField('city')">City</th>
                        <th [ngStyle]="setSortedStyle('start_date')" (click)="setSortedField('start_date')">Start Date</th>
                        <th [ngStyle]="setSortedStyle('end_date')" (click)="setSortedField('end_date')">End Date</th>
                        <th [ngStyle]="setSortedStyle('price')" (click)="setSortedField('price')">Price</th>
                        <th [ngStyle]="setSortedStyle('status')" (click)="setSortedField('status')">Status</th>
                        <th [ngStyle]="setSortedStyle('color')" (click)="setSortedField('color')">Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of (data | orderby:sortedField)">
                        <td>{{item.city}}</td>
                        <td>{{item.start_date}}</td>
                        <td>{{item.end_date}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.status}}</td>
                        <td [ngStyle]='setColorStyles(item)'>{{item.color}}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    `
})

export class GridComponent {
    @Input('data') data: any[];

    sortedField: string = 'city';

    setSortedField(field) {
        this.sortedField = field;
    }

    setColorStyles(item) {
        let styles = {
            'background-color': item.color
        };

        return styles;
    }

    setSortedStyle(field) {
        let styles = {
            'color': this.sortedField === field ? '#00B686': '#000000'
        }

        return styles;
    }
}