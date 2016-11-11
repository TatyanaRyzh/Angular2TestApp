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
var ValidationFormComponent = (function () {
    function ValidationFormComponent() {
    }
    ValidationFormComponent = __decorate([
        core_1.Component({
            selector: 'validation-form',
            template: "\n        <div class=\"col-xs-3\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"email\">E-mail</label>\n                    <input type=\"text\" class=\"form-control\" id=\"email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"text\" class=\"form-control\" id=\"password\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"conf_password\">Confirm password</label>\n                    <input type=\"text\" class=\"form-control\" id=\"conf_password\" required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Save</button>\n            </form>\n            <div>\n                <div class=\"form-group\">\n                    <label for=\"email\">E-mail:</label>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password:</label>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ValidationFormComponent);
    return ValidationFormComponent;
}());
exports.ValidationFormComponent = ValidationFormComponent;
//# sourceMappingURL=validation.form.component.js.map