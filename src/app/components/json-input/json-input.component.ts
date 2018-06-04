import { Component, OnInit } from '@angular/core';
import * as jsonPath from 'jsonpath/jsonpath';

// TODO: do I actually need to use a service here?
import { DataService } from '../../services/data.service';

declare var $:any;

function parseJson(content: string) {
    // get the response data
    var rawData = content.replace(/'/g, '"');
    var jsonData = JSON.parse(rawData);
    // parse and output the content
    $('#json-renderer').jsonPathPicker(jsonData, {
        pathQuotesType: 'double'
    });
}

@Component({
    selector: 'json-input',
    templateUrl: './json-input.component.html',
    styleUrls: ['./json-input.component.less']
})
export class JsonInputComponent implements OnInit {
    rawInput: string = '';
    validationStatus: string = 'Unvalidated';

    constructor(
        private data: DataService
    ) { }

    ngOnInit() {}

    submitJson() {
        try {
            this.data.jsonData = JSON.parse(this.rawInput);
            this.validationStatus = 'Validated';
            this.rawInput = JSON.stringify(this.data.jsonData, null, 4);
            parseJson(this.rawInput);
            window.setTimeout(function() {
                $('.jqueryUpdateButton').each(function() {
                    $(this).click();
                });
            }, 100);
        } catch(err) {
            this.validationStatus = 'Error - ' + err.message;
        }
        // TODO: when submitting a new json, rerun all of the queries against the new content...
    }

    search(query: string) {
        let response: {
            results: string,
            error: string
        } = {
            results: '',
            error: ''
        };
        try {
            response.results = jsonPath.query(this.data.jsonData, query || query);
        }
        catch(err) {
            response.error = err.message;
        }
        return response;
    }

    invalidate() {
        this.validationStatus = 'Unvalidated';
        // clear the div in which the json is rendered
        // $('#json-renderer').text('');
    }

}
