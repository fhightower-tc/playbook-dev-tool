import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';

import { DataService } from '../../services/data.service';

declare var $:any;

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
    searchValues: string[] = [];
    exportTypes: string[] = ['feedApp'];
    selectedExportType: string = '';
    // this is the data gathered from the queries/mappings
    queryMappings: {
        query: string,
        mapping: string
    }[] =[];
    // this is the data that gets (possibly) modified and displayed for export
    exportData: string = '';

    constructor(
        private data: DataService
    ) { }

    ngOnInit() {
        // initialize the view with a basic search
        this.addNewSearch();
    }

    private addNewSearch() {
        let id = UUID.UUID();
        this.searchValues.push(id);
    }

    deleteSearchValue(searchValueID: UUID) {
        for (var i = this.searchValues.length - 1; i >= 0; i--) {
            if (this.searchValues[i] === searchValueID) {
                this.searchValues.splice(i, 1);
                break;
            }
        }
    }

    prepareQueryMappings() {
        this.queryMappings = [];

        let queries: string[] = [];
        $('input.query').each(function() {
            queries.push($(this).val());
        });
        let mappings: string[] = [];
        $('input.mapping').each(function() {
            mappings.push($(this).val());
        });

        if (queries.length === mappings.length) {
            for (var i = queries.length - 1; i >= 0; i--) {
                this.queryMappings.push({
                    query: queries[i],
                    mapping: mappings[i]
                });
            }
        } else if (queries.length < mappings.length) {
            for (var i = queries.length - 1; i >= 0; i--) {
                this.queryMappings.push({
                    query: queries[i],
                    mapping: mappings[i]
                });
            }
        } else {
            for (var i = mappings.length - 1; i >= 0; i--) {
                this.queryMappings.push({
                    query: queries[i],
                    mapping: mappings[i]
                });
            }
        }
    }

    exportPaths() {
        if (this.selectedExportType !== '') {
            // collect the queries and mappings
            this.prepareQueryMappings();

            // create the string representing the function we would like to call
            let functionString = 'this.' + this.selectedExportType + 'Export();';
            // call the function
            eval(functionString);
        } else {
            // TODO: add a message here
        }
    }

    /* EXPORT FUNCTIONS. */

    feedAppExport() {
        $('#exportModal').foundation('open');
        this.exportData = JSON.stringify(this.queryMappings);
    }

}
