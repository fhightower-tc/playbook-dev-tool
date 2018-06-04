import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
    searchValues: string[] = [];

    constructor() { }

    ngOnInit() {}

    private addNewSearch() {
        this.searchValues.push('a');
    }

    // TODO: implement ability to delete search values
    // deleteSearchValue() {
    //     console.log('here');
    // }

}
