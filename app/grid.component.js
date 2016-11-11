"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GridComponent = (function () {
    function GridComponent() {
        this.sortedField = 'city';
    }
    GridComponent.prototype.setSortedField = function (field) {
        this.sortedField = field;
    };
    GridComponent.prototype.setColorStyles = function (item) {
        var styles = {
            'background-color': item.color
        };
        return styles;
    };
    GridComponent.prototype.setSortedStyle = function (field) {
        var styles = {
            'color': this.sortedField === field ? '#00B686' : '#000000'
        };
        return styles;
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Array)
    ], GridComponent.prototype, "data", void 0);
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-component',
            template: "\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-hover\">\n                <thead>\n                    <tr class=\"click-headers\">\n                        <th [ngStyle]=\"setSortedStyle('city')\" (click)=\"setSortedField('city')\">City</th>\n                        <th [ngStyle]=\"setSortedStyle('start_date')\" (click)=\"setSortedField('start_date')\">Start Date</th>\n                        <th [ngStyle]=\"setSortedStyle('end_date')\" (click)=\"setSortedField('end_date')\">End Date</th>\n                        <th [ngStyle]=\"setSortedStyle('price')\" (click)=\"setSortedField('price')\">Price</th>\n                        <th [ngStyle]=\"setSortedStyle('status')\" (click)=\"setSortedField('status')\">Status</th>\n                        <th [ngStyle]=\"setSortedStyle('color')\" (click)=\"setSortedField('color')\">Color</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of (data | orderby:sortedField)\">\n                        <td>{{item.city}}</td>\n                        <td>{{item.start_date}}</td>\n                        <td>{{item.end_date}}</td>\n                        <td>{{item.price}}</td>\n                        <td>{{item.status}}</td>\n                        <td [ngStyle]='setColorStyles(item)'>{{item.color}}</td>\n                    </tr>\n                </tbody>\n            </table>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map