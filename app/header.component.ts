import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    template: `
        <div class="navbar navbar-static-top">
            <div class="navbar-inner">
                <div class="brand">Ng2 Test App</div>
            </div>
        </div>
    `
})

export class HeaderComponent { };