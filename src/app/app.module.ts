import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GaugeModule } from 'angular-gauge';


import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';




@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        HomeComponent,
        DetailsComponent,
        GameTabsComponent



    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpHeadersInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorsInterceptor,
          multi: true,
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        GaugeModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        GaugeModule.forRoot(),
        HttpClientModule,
        MatTabsModule,
        MatIconModule


    ]
})
export class AppModule { }
