import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Endless Frontier Helper';
    config.map([
      { route: ['', 'spirithighlands'], name: 'spirithighlands', moduleId: 'spirithighlands/spirithighlands' },
      { route: 'newplayers', name: 'newplayers', moduleId: 'newplayers/newplayers', nav: true },
      { route: 'units', name: 'units', moduleId: 'units/units', nav: true },
      { route: 'transcend', name: 'transcend', moduleId: 'transcend/transcend', nav: true },
      { route: 'dungeons', name: 'dungeons', moduleId: 'dungeons/dungeons', nav: true },
      { route: 'tot', name: 'tot', moduleId: 'tot/tot', nav: true },
	  { route: 'guildbosses', name: 'guildbosses', moduleId: 'guildbosses/guildbosses', nav: true }
    ]);
  }
	constructor() {
	}

	activate() {
	}

	attached() {
	 }
}
