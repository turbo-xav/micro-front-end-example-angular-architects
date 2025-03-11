const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'web-components',

  exposes: {
    './Component': './projects/web-components/src/app/app.component.ts',
    './SimpleButton': './projects/web-components/public/simple-button.js',
    './HelloWorldComponent': './projects/web-components/src/app/hello-world.component.ts'

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
