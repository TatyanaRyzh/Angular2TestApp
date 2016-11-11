import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { ValidationFormComponent } from './validation.form.component';
import { OrderByPipe } from './orderby.pipe'; 


@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        HttpModule,
        FormsModule,
        MyDatePickerModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        GridComponent,
        ValidationFormComponent,
        OrderByPipe
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }