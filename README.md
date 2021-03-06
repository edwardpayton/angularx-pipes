# AngularX Pipes

A collection of useful, reusable Angular pipes

For Angular 2 and above

Supplied in UMD Bundle format through NPM

https://www.npmjs.com/package/angularx-pipes  
https://github.com/edwardpayton/angularx-pipes

## Installation

To install this library, run:

```bash
$ npm install angularx-pipes --save
```

## Consuming the library

You can import your library in any Angular application by running:

```bash
$ npm install angularx-pipes
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { AngularxPipes } from 'angularx-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularxPipes // import the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its pipes in your Angular application

## Numeral Pipe

[NumeralJS](http://numeraljs.com/) is required for the numeral pipe
It is includes in the package, but you can also install in yourself

```bash
$ npm install numeral --save
```

## License

MIT © [Edward Payton](mailto:edwardjpayton@gmail.com)