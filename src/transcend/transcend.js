import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class Transcend {
    
    constructor(DataService) {
        this.DataService = DataService;
    }
}