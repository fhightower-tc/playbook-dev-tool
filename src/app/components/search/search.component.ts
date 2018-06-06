import { Component, OnInit } from '@angular/core';

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

    ngOnInit() {}

    private addNewSearch() {
        this.searchValues.push('a');
    }

    // TODO: implement ability to delete search values
    // deleteSearchValue() {
    //     console.log('here');
    // }

}
