# Set up ssr in angular

## step 1 : add angular universal schematics

```bash
ng add @nguniversal/express-engine
```

## step 2 : install localstorage mocking for server

```bash
npm install localstorage-polyfill
```

## step 3: install window mocking for server

```bash
npm install mock-browser
```

## step 4: customize server.ts

```typescript
import "localstorage-polyfill";

const MockBrowser = require("mock-browser").mocks.MockBrowser;
const mock = new MockBrowser();

global["localStorage"] = localStorage;
global["document"] = mock.getDocument();
global["window"] = mock.getWindow();
```

## step 5: exclude routes from ssr

```typescript
// disable ssr rendering for this route
server.get("/admin/**", (req, res) => {
  res.sendFile(join(distFolder, "index.html"));
});

// All regular routes use the Universal engine (make sure to set up these ssr route after the excluded  ones)
server.get("*", (req, res) => {
  res.render(indexHtml, {
    req,
    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
  });
});
```

## step 6: avoid double http call

**notice** it seems that you don't even need this part of the setup, i commendted the transferthttpcachedmodule and the servertransferstatemodule and still everything worked perfectly

- in app.module.ts add

```typescript
// app.module.ts
import { TransferHttpCacheModule } from '@nguniversal/common'; // HERE
import {
  BrowserModule,
 // BrowserTransferStateModule, not necessary
} from '@angular/platform-browser';

  imports: [
   //...
    // BrowserTransferStateModule, // not necessary
    TransferHttpCacheModule,
    // ...
  ],

```

- in app.server.module.ts add

```typescript
// app.server.module.ts

import {
  ServerTransferStateModule, // HERE
} from '@angular/platform-server';

  imports: [
   //...
    ServerTransferStateModule
    //...
  ],
```

# exclude components for rendering in server

```bash
npm install ngx-ssr-exclude
```

```typescript
import { NgModule } from "@angular/core";
import { SSRExcludeModule } from "ngx-ssr-exclude";

@NgModule({
  imports: [SSRExcludeModule],
})
export class YourModule {}
```

```
<p *ssrExclude>This paragraph won't be rendered on the server.</p>
```

# Bonus

To take this implementation to the edges we also use firebase for authentication and jsonplaceholder for http request

- see todo.service.ts for http requests
- see ng-auth.service.ts for auth

# Resources

[Angular 12 SEO – Set Dynamic Page Title and Meta Tags in Universal App](https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/)
