import {
    Component,
    OnInit
} from '@angular/core';

import { Router } from '@angular/router';

import {
    SpacesBaseService,
    SpacesLoggingService,
    SpacesMessagesService,
} from 'spaces-ng/';

import { DataService } from './services/data.service';

declare var $:any

@Component({
    templateUrl: './main.component.html',
    selector: 'tc-main',
})
export class MainComponent implements OnInit {
    constructor(
        private logging: SpacesLoggingService,
        private messages: SpacesMessagesService,
        private router: Router,
        private spacesBase: SpacesBaseService,
        private data: DataService
    ) {
        this.logging.moduleColor('#FFFF00', '#000', 'MainComponent');  // set logging console colors
    }

    ngOnInit() {
        $(document).foundation();
    }

    goTo(routePath: string) {
        this.router.navigate([routePath]);
    }
}
