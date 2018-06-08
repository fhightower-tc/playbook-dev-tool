import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
    searchValues: string[] = [];

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

}
