import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class NewPlayers {
    
    constructor(DataService) {
        this.DataService = DataService;
    }
}