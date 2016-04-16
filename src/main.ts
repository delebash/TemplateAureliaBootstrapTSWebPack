import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/styles.css';
import'../sass/styles.scss'
import $ from 'jquery'

import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';

bootstrap((aurelia: Aurelia) => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')


  // aurelia.start().then(() => aurelia.setRoot('app', document.body));
  aurelia.start().then(a => a.setRoot('app', document.body))
    .then(a => {
      // Initialize any frameworks you want to use
     // var name = 'dan';
      //$(document.body).html(name);
    });
});
