import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    jsonData: any;
    validationStatus: string = 'Unvalidated';

    constructor() {}
}