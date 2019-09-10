important take a look what need to be changed

proper polifils
```js
// hello_angular/polyfills.ts
import 'zone.js/dist/zone';
import "core-js/es/reflect"
import "core-js/proposals/reflect-metadata"
```

proper loading html templates and styles
```js
// test-angular/config/webpack/environment.js
environment.loaders.append('html', {
    test: /\.html$/,
    use: [{
        loader: 'html-loader',
        options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
            customAttrAssign: [ /\)?\]?=/ ]
        }
    }]
})

environment.loaders.prepend('style', {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: "to-string-loader",
        }
    ]
});
```
usage in code
```ts
import { Component } from '@angular/core';
import template from './app.component.html';
import styles from './styles.sass';


@Component({
  selector: '.hello-angular',
  template: template,
  styles: [styles]
})
export class AppComponent {
  name = 'Try angular';
}
```
important that at current time 10.09.2019 css-loader should be above 2.1 and below 3.1 version or it will not work
```json
{
  "name": "test_angular",
  "private": true,
  "dependencies": {
    "@angular/common": "^8.2.5",
    "@angular/compiler": "^8.2.5",
    "@angular/core": "^8.2.5",
    "@angular/platform-browser": "^8.2.5",
    "@angular/platform-browser-dynamic": "^8.2.5",
    "@rails/actioncable": "^6.0.0-alpha",
    "@rails/activestorage": "^6.0.0-alpha",
    "@rails/ujs": "^6.0.0-alpha",
    "@rails/webpacker": "^4.0.7",
    "core-js": "^3.2.1",
    "css-loader": "^2.1.1",
    "html-loader": "^0.5.5",
    "postcss-loader": "^3.0.0",
    "resolve-url-loader": "^3.1.0",
    "rxjs": "^6.5.3",
    "sass": "^1.23.0-module.beta.1",
    "to-string-loader": "^1.1.5",
    "ts-loader": "^6.0.4",
    "turbolinks": "^5.2.0",
    "typescript": "^3.6.2",
    "zone.js": "^0.10.2"
  },
  "version": "0.1.0",
  "devDependencies": {
    "webpack-dev-server": "^3.8.0"
  }
}
```

all this knowledge cost me couple of hours
