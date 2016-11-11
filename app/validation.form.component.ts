import { Component } from '@angular/core';

@Component({
    selector: 'validation-form',
    template: `
        <div class="col-xs-3">
            <form>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" class="form-control" id="password" required>
                </div>
                <div class="form-group">
                    <label for="conf_password">Confirm password</label>
                    <input type="text" class="form-control" id="conf_password" required>
                </div>
                <button type="submit" class="btn btn-default">Save</button>
            </form>
            <div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    {{model.email}}
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    {{model.password}}
                </div>
            </div>
        </div>
    `
})

export class ValidationFormComponent {}