/* Core */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Third-Party */
import {
    BowserModule,
    BowserService
} from 'ngx-bowser';

import {
    AccordionModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    InputTextModule,
    PanelModule,
    SharedModule,
    StepsModule,
    TabViewModule
} from 'primeng/primeng';

import { TableModule } from 'primeng/table';

/* Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

/* Services */
import {
    SpacesBaseService,
    SpacesLoggingService,
    SpacesMessagesService,
    SpacesRequestService,
    SpacesStorageService,
    SpacesUtilityService
} from 'spaces-ng';

import {
    // Address,
    // EmailAddress,
    // Host,
    TcExchangeDbService,
    TcGroupService,
    TcIndicatorService,
    TcOwnerService
    // Url
} from 'threatconnect-ng';
import { SearchComponent } from './components/search/search.component';
import { JsonInputComponent } from './components/json-input/json-input.component';
import { SearchValueComponent } from './components/search-value/search-value.component';
import { DataService } from './services/data.service';

@NgModule({
    imports: [
        /* Core */
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        /* Bowser */
        BowserModule,
        /* PrimeNG */
        AccordionModule,
        ButtonModule,
        DataTableModule,
        DialogModule,
        DropdownModule,
        GrowlModule,
        InputTextModule,
        PanelModule,
        SharedModule,
        StepsModule,
        TabViewModule,
        TableModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        SearchComponent,
        JsonInputComponent,
        SearchValueComponent
    ],
    providers: [
        /* Bowser Service */
        BowserService,
        /* TC Service */
        SpacesBaseService,
        SpacesLoggingService,
        SpacesMessagesService,
        SpacesRequestService,
        SpacesStorageService,
        SpacesUtilityService,
        TcExchangeDbService,
        TcGroupService,
        TcIndicatorService,
        TcOwnerService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
