import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class SpiritHighlands {

    constructor(DataService) {
        this.DataService = DataService;
        this.message = 'EndlessFrontier Tools v1.0';
        this.data = [];
    }

    activate() {
        this.DataService.getSpiritData().then(result => {
            this.data = result;
        });
    }
    attached() {
        $('[data-toggle="tooltip"]').tooltip();   //Turn on the Bootstrap Data toggles!
    }
}