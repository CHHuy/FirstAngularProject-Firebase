// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const packageJson = require('../../package.json');

export const environment = {
  production: false,
  envName: 'DEV',
  i18nPrefix: '',
  appName: 'Angular Cli Seed',
  appShortName: 'angular',
  appPrefix: 'ACS',
  domain: {
    app: 'http://localhost:4200'
  },
  API: 'http://localhost:8000/api',
  versions: {
    app: packageJson.version
  },
  firebaseConfig: {
    apiKey: 'AIzaSyDrRXKDGgc_xchOoVYdNWpk136OHL-H298',
    authDomain: 'moli-confession.firebaseapp.com',
    databaseURL: 'https://moli-confession.firebaseio.com',
    projectId: 'moli-confession',
    storageBucket: 'moli-confession.appspot.com',
    messagingSenderId: '108110904191',
    appId: '1:108110904191:web:53d94ddfacfca67bf7384a'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
