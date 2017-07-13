import { inject } from 'aurelia-framework';
import { DataService } from '../services/dataService';

@inject(DataService)
export class GuildBosses {
    
    constructor(DataService) {
        this.DataService = DataService;
    }
}