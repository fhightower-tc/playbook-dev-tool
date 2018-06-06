import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';

import { JsonInputComponent } from '../json-input/json-input.component';

declare var $:any;

let AUTOCOMPLETE_MAPPINGS = {
    '[': ']',
    '(': ')'
}

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

    copyQuery() {
        // TODO: implement
    }

    copyResult() {
        // TODO: implement
    }

    autocomplete() {
        // TODO: change this to look at the last character the user typed rather than the last character in the input field (this will handle nested [] and () better)
        var lastChar = this.query[this.query.length - 1];
        if (lastChar in AUTOCOMPLETE_MAPPINGS) {
            this.query = this.query + AUTOCOMPLETE_MAPPINGS[lastChar];
            let _this = this;
            window.setTimeout(function() {
                let newCursorPosition = _this.query.length - 1;
                document.getElementById('' + _this.id).setSelectionRange(newCursorPosition, newCursorPosition);
            }, 10);
        }
    }

    updateResult() {
        // this is a hack to make sure the text in the input field (with class .query) is the same as this.query. This is necessary because the text in the input field is sometimes set/changed by jquery, but this change is not tracked by angular
        this.query = $('#' + this.id).val();
        this.autocomplete();
        let response = this.jsonComponent.search(this.query);
        this.result = response.results[0];
        this.error = response.error;
    }
}
