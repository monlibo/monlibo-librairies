# Ngx-BJ-Toaster

**Ngx-BJ-Toaster** est une bibliothèque Angular puissante et facile à utiliser pour afficher des notifications (toasts) animées avec une personnalisation complète.

---

## Fonctionnalités

- 🌟 Types de notifications : **success**, **error**, **info**.
- ⏳ Durée configurable pour chaque toast.
- 🚀 Animations fluides à l'entrée et à la sortie.
- 📌 Position configurable : **haut-droite**, **haut-gauche**, **bas-droite**, **bas-gauche**.
- 🧹 Gestion automatique avec un nombre maximum de toasts affichés simultanément.
- 🌟 Icônes personnalisées pour chaque type de notification.
- 🔧 Configuration globale ou locale.

---

## Installation

### Pré-requis

- Angular 16 ou supérieur.

Installez la bibliothèque via npm :

```bash
npm install ngx-bj-toaster
```

---

## Utilisation

### 1. Ajouter le composant et configurer globalement

Ajoutez le module du toast et configurez-le dans votre fichier `app.config.ts` :

```typescript
import {
  ApplicationConfig,
  importProvidersFrom,
  InjectionToken
} from '@angular/core';
...

import { TOAST_CONFIG } from './toast/toast.service';

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

---

### 2. Ajouter des toasts dans un composant

Ajoutez des notifications avec le `ToastService` dans vos composants :

```typescript
import { Component } from '@angular/core';
import { ToastService } from 'ngx-bj-toaster';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="showSuccess()">Show Success</button>
    <button (click)="showError()">Show Error</button>
    <button (click)="showInfo()">Show Info</button>
    <bj-toaster></bj-toaster>
  `,
})
export class AppComponent {
  constructor(private toastService: ToastService) {}

  showSuccess() {
    this.toastService.success('Opération réussie !');
  }

  showError() {
    this.toastService.error('Une erreur est survenue.');
  }

  showInfo() {
    this.toastService.info('Ceci est une information.');
  }
}
```

---

## API de configuration

### Configuration globale (`ToastConfig`)

| Propriété   | Type      | Par défaut  | Description                                                                  |
| ----------- | --------- | ----------- | ---------------------------------------------------------------------------- |
| `position`  | `string`  | `top-right` | Position des toasts : `top-right`, `top-left`, `bottom-right`, `bottom-left` |
| `maxToasts` | `number`  | `5`         | Nombre maximum de toasts affichés simultanément                              |
| `duration`  | `number`  | `5000`      | Durée des toasts (en millisecondes)                                          |
| `floating`  | `boolean` | `false`     | Si activé, les toasts restent visibles jusqu'à suppression manuelle          |

### API du service (`ToastService`)

#### Méthodes disponibles

| Méthode                    | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| `success(message: string)` | Ajoute un toast de succès avec le message fourni     |
| `error(message: string)`   | Ajoute un toast d'erreur avec le message fourni      |
| `info(message: string)`    | Ajoute un toast d'information avec le message fourni |
| `addToast(toast: Toast)`   | Ajoute un toast personnalisé (type, durée, etc.)     |
| `removeToast(id: string)`  | Supprime un toast à partir de son identifiant        |

#### Exemple : Ajouter un toast personnalisé

```typescript
this.toastService.addToast({
  type: 'success',
  message: 'Votre action a réussi !',
  duration: 3000,
});
```

---

## Exemple d'animation et de style

Le composant utilise Angular Animations pour des transitions fluides. Vous pouvez personnaliser les styles via votre propre fichier CSS/SCSS.


## Contribuer

Les contributions sont les bienvenues ! Si vous trouvez un bug ou souhaitez proposer une nouvelle fonctionnalité, ouvrez une issue ou soumettez une pull request.
