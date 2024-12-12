# Toaster for Angular

BJ Toaster is a customizable toast notification library for Angular applications, allowing you to display beautiful and responsive toast messages with animations.

## Features

- Customizable toast positions.
- Supports multiple toast types (success, error, info).
- Configurable maximum number of visible toasts.
- Auto-dismiss functionality with customizable duration.
- Smooth entry and exit animations.
- Floating or fixed toast modes.

## Preview

<p>
<img src="https://github.com/monlibo/monlibo-librairies/blob/main/projects/ngx-bj-toaster/assets/images/scrennshot.png" style="display:inline-block;width:100%;" />
</p>

## Installation

Install the library via npm:

```bash
npm install ngx-bj-toaster
```

## Usage

### 1. Import the `ToastService` and `TOAST_CONFIG` into your Angular application

#### app.conf

```typescript
import {
  ApplicationConfig,
  importProvidersFrom,
  InjectionToken
} from '@angular/core';
...

import { TOAST_CONFIG } from 'ngx-bj-toaster';

export const appConfig: ApplicationConfig = {
  providers: [
   ...,
    {
      provide: TOAST_CONFIG,
      useFactory: () => ({
        position: 'top-right',
        maxToasts: 3,
        duration: 5000,
        floating: false,
      }),
    },
  ],
};
```

### 2. Use the ToastService

Inject the `ToastService` in your component and use it to display toasts:

#### ExampleComponent

```typescript
import { Component } from "@angular/core";
import { ToastService } from "ngx-bj-toaster";

@Component({
  selector: "app-example",
  template: `<button (click)="showSuccessToast()">Show Success Toast</button>`,
})
export class ExampleComponent {
  constructor(private toastService: ToastService) {}

  showSuccessToast() {
    this.toastService.success({
      title: "Operation Successful",
      message: "Your operation was completed successfully!",
    });
  }
}
```

### 3. Add the Toast Component to Your Application

Add the `<bj-toaster/>` selector to your application's root component or wherever you want the toasts to appear.

#### AppComponent Template

```html
<bj-toaster /> <router-outlet></router-outlet>
```

### 4. Customize Toast Configurations (Optional)

You can customize the default behavior by providing a configuration object to the `TOAST_CONFIG` token.

#### Example

```typescript
{ provide: TOAST_CONFIG, useValue: { position: 'bottom-left', maxToasts: 3, duration: 3000, floating: true } }
```

## Toast Options

| Option    | Type                                                                                                     | Default       | Description                                 |
| --------- | -------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------- |
| position  | string (`'top-right'`, `top-left`, `'bottom-right'`, `'bottom-left'`, `'top-center'`, `'bottom-center'`) | `'top-right'` | Position of the toasts.                     |
| maxToasts | number                                                                                                   | `5`           | Maximum number of visible toasts at a time. |
| duration  | number                                                                                                   | `5000`        | Duration (ms) before auto-dismiss.          |
| floating  | boolean                                                                                                  | `false`       | Whether the toast should remain visible.    |

## ToastService API

| Method        | Parameters                        | Description                                   |                           |
| ------------- | --------------------------------- | --------------------------------------------- | ------------------------- |
| `success`     | \`toast: Omit\<ToastMessage, 'id' | 'type'>, floating?: boolean\`                 | Displays a success toast. |
| `error`       | \`toast: Omit\<ToastMessage, 'id' | 'type'>, floating?: boolean\`                 | Displays an error toast.  |
| `info`        | \`toast: Omit\<ToastMessage, 'id' | 'type'>, floating?: boolean\`                 | Displays an info toast.   |
| `addToast`    | `toast: Omit<ToastMessage, 'id'>` | Adds a custom toast message.                  |                           |
| `removeToast` | `id: string`                      | Removes a toast by its ID.                    |                           |
| `getPosition` | -                                 | Retrieves the current position configuration. |                           |

## License

This library is open-source and available under the MIT License.
