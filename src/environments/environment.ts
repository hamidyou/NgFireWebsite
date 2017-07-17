// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCknkWRymCmV__iu7D7d-ymSO6bi9aII_0',
    authDomain: 'apmtpc-ngfire.firebaseapp.com',
    databaseURL: 'https://apmtpc-ngfire.firebaseio.com',
    projectId: 'apmtpc-ngfire',
    storageBucket: 'apmtpc-ngfire.appspot.com',
    messagingSenderId: '390852093288'
  }
};
