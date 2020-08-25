const packageJson = require('../../package.json');

export const environment = {
  production: true,
  envName: 'PROD',
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
