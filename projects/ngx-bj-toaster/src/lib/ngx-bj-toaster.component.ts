import { trigger, transition, style, animate } from '@angular/animations';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TOAST_CONFIG,
  ToastConfig,
  ToastMessage,
  ToastService,
} from './ngx-bj-toaster.service';
import { ToastSuccessIcon } from './icons/success-icon.component';
import { ToastInfoIcon } from './icons/info-icon.component';
import { ToastErrorIcon } from './icons/error-icon.component';
import { ToastXIcon } from "./icons/x-icon.component";

@Component({
  selector: 'bj-toaster',
  imports: [
    NgClass,
    NgFor,
    AsyncPipe,
    ToastSuccessIcon,
    ToastInfoIcon,
    ToastErrorIcon,
    ToastXIcon
],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  animations: [
    trigger('toastAnimation', [
      // Animation d'entrée : le toast glisse vers le bas
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      // Animation de sortie : le toast disparaît vers le haut
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateY(-20px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  toasts$: Observable<ToastMessage[]>;
  position: string = 'top-right';

  constructor(
    @Inject(ToastService) private readonly toastService: ToastService,
    @Inject(TOAST_CONFIG) private config: ToastConfig
  ) {
    this.toasts$ = this.toastService.toasts$;
  }

  ngOnInit(): void {
    this.position =
      this.toastService.getPosition() ?? this.config.position ?? 'top-right';
  }

  removeToast(id: string): void {
    this.toastService.removeToast(id);
  }

  getPositionClass(): string {
    return this.toastService.getPosition();
  }

  // getTypeClass(type: string | undefined): string {
  //   switch (type) {
  //     case 'success':
  //       return 'success';
  //     case 'error':
  //       return 'text-red-500 border-red-300 ';
  //     case 'info':
  //       return 'text-black border-gray-300';
  //     default:
  //       return 'text-black border-gray-300';
  //   }
  // }

  getIconClass(type: string | undefined): string {
    switch (type) {
      case 'success':
        return ' text-green-500';
      case 'error':
        return 'text-red-500';
      case 'info':
        return 'text-black ';
      default:
        return 'text-black ';
    }
  }
}
