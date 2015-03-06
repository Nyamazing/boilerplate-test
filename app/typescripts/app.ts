///<reference path="./typings/jquery/jquery.d.ts" />
///<reference path="./typings/underscore/underscore.d.ts" />
///<reference path="./typings/backbone/backbone.d.ts" />
///<reference path="./typings/marionette/marionette.d.ts" />
///<reference path="./typings/browserify/browserify.d.ts" />
'use strict';

import $ = require('jquery');
import Backbone = require('backbone');
Backbone.$ = $;
import Marionette = require('backbone.marionette');
import u = require('underscore');

// import SomeModel = require('./models/Some');
// import Some      = SomeModel.Some;

// import SomeView  = require('./itemviews/SomeView');

export class Application extends Marionette.Application {
  MainRegion: Marionette.Region;

  constructor() {
    console.log('initializing application');
    super();

    this.addRegions({
      MainRegion: '#main',
    });

    if ( Backbone.history ){
      Backbone.history.start({pushState:true});
    }
  }

  onStart() {
    this.MainRegion.reset();

    //this.MainRegion.show(someView);
  }
}

class MainRouter extends Marionette.AppRouter {
  constructor(options?: Marionette.AppRouterOptions){
    super(options);
  }
}

class MainController extends Marionette.Controller {
  router: MainRouter;
  constructor(options?: any){
    super(options);
  }
  hello(){
    console.log('hello');
  }
}

var controller = new MainController();
var router     = new MainRouter({
  appRoutes: {
    '': 'hello',
  },
  routes: {},
  controller: controller
});

controller.router = router;

(function(){
  var app: Application = new Application();
  app.start();
})();


