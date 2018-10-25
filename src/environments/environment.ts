// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    platformClient_id: 'ca_DjB1ew7JcIXKd6Ya05uPjsOIQ6UUkl5L',
    apiPublishableKey: 'pk_test_Wz3FgFCq7EBlbfI16Fg8dOtU'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyB0Uu3a7L8ntlpXKYhuAg8vGD0Cvc7tKKk',
    authDomain: 'deft-chariot-217803.firebaseapp.com',
    databaseURL: 'https://deft-chariot-217803.firebaseio.com',
    projectId: 'deft-chariot-217803',
    storageBucket: 'deft-chariot-217803.appspot.com',
    messagingSenderId: '89644495647'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
