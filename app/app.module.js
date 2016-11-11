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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var platform_browser_1 = require('@angular/platform-browser');
var mydatepicker_1 = require('mydatepicker');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var grid_component_1 = require('./grid.component');
var validation_form_component_1 = require('./validation.form.component');
var orderby_pipe_1 = require('./orderby.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                http_1.HttpModule,
                forms_1.FormsModule,
                mydatepicker_1.MyDatePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                grid_component_1.GridComponent,
                validation_form_component_1.ValidationFormComponent,
                orderby_pipe_1.OrderByPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map