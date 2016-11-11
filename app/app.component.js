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
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.data = [];
        this.originalData = [];
        this.start_date = -Infinity;
        this.end_date = Infinity;
        this.datepicker_options = {
            height: '34px',
            width: '260px',
            selectionTxtFontSize: '12px'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AppComponent.prototype.onDateChanged = function (type, event) {
        var _this = this;
        var threshold = (new Date(event.date.year, event.date.month, event.date.day)).getTime();
        if (isNaN(threshold)) {
            this[type] = type === 'start_date' ? -Infinity : Infinity;
        }
        else {
            this[type] = threshold;
        }
        this.data = this.originalData.filter(function (item) {
            return ((new Date(item.start_date)).getTime() >= _this.start_date) && ((new Date(item.end_date)).getTime() <= _this.end_date);
        });
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('app/data.json')
            .map(function (res) {
            _this.data = res.json();
            _this.originalData = res.json();
        })
            .subscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'test-app',
            template: "\n        <header-component></header-component>\n\n        <validation-form></validation-form>\n\n        <div class=\"date-range\">\n            Start date:\n            <my-date-picker \n                [options]=\"datepicker_options\" \n                (dateChanged)=\"onDateChanged('start_date', $event)\">\n            </my-date-picker>\n            End date:\n            <my-date-picker \n                [options]=\"datepicker_options\"\n                (dateChanged)=\"onDateChanged('end_date', $event)\">\n            </my-date-picker>\n        <div>\n\n        <grid-component [data]=\"data\"></grid-component>\n    "
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map