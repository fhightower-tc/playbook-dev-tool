import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';

import { JsonInputComponent } from '../json-input/json-input.component';

declare var $:any;

@Component({
    selector: 'search-value',
    templateUrl: './search-value.component.html',
    styleUrls: ['./search-value.component.less'],
    providers: [JsonInputComponent]
})
export class SearchValueComponent implements OnInit {
    query: string = '';
    result: string = '';
    error: string = '';
    id: UUID;

    constructor(
        private jsonComponent: JsonInputComponent,
    ) {
        this.id = UUID.UUID();
    }

    ngOnInit() {
        window.setTimeout(function() {
            $('input.query').last().focus();
        }, 100);
    }

    autocomplete() {
        // if (this.query[this.query.length - 1] === '[') {
        //     this.query = this.query + ']'
        // }
        // TODO: implement
    }

    updateResult() {
        // this is a hack to make sure the text in the input field (with class .query) is the same as this.query. This is necessary because the text in the input field is sometimes set/changed by jquery, but this change is not tracked by angular
        this.query = $('#' + this.id).val();
        this.autocomplete();
        let response = this.jsonComponent.search(this.query);
        this.result = JSON.stringify(response.results);
        this.error = response.error;
    }
}
