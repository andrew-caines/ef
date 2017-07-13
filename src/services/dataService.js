import { HttpClient, json } from 'aurelia-fetch-client';
let httpClient = new HttpClient()
	.configure(x => {
		x.useStandardConfiguration();
		x.withBaseUrl('http://andrew.dieselperformance.com:3000/api');
		//x.withHeaders('Accept', 'application/json');
		x.withDefaults({
			headers: {
				'Accept': 'application/json'
			}
		});
	});


export class DataService {

	constructor() {
		//This class is just to get a copy of the JSON structure
	}
	
	getSpiritData() {
		return new Promise((resolve, reject) => {
			httpClient
				.fetch('/spiritHighlandsData/', {
					method: 'GET',
				})
				.then(response => response.json())
				.then(shl => {
					resolve(shl);
				})
				.catch(error => {
					alert('Error Loading spiritHighlandsData');
					reject(error);
				});
		});
	}
}