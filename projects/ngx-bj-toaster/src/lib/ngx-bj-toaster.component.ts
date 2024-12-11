import { trigger, transition, style, animate } from '@angular/animations';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastMessage, ToastService } from './ngx-bj-toaster.service';
import { ToastSuccessIcon } from './icons/success-icon.component';
import { ToastInfoIcon } from './icons/info-icon.component';
import { ToastErrorIcon } from './icons/error-icon.component';

@Component({
  selector: 'bj-toaster',
  imports: [
    NgClass,
    NgFor,
    AsyncPipe,
    ToastSuccessIcon,
    ToastInfoIcon,
    ToastErrorIcon,
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
  constructor(private readonly toastService: ToastService) {
    this.toasts$ = this.toastService.toasts$;
  }

  ngOnInit(): void {
    this.position = this.toastService.getPosition() ?? 'top-right';
  }

  removeToast(id: string): void {
    this.toastService.removeToast(id);
  }

  getPositionClass(): string {
    return this.toastService.getPosition();
  }

  getTypeClass(type: string | undefined): string {
    switch (type) {
      case 'success':
        return ' text-green-500 border-green-200';
      case 'error':
        return 'text-red-500 border-red-300 ';
      case 'info':
        return 'text-black border-gray-300';
      default:
        return 'text-black border-gray-300';
    }
  }

  getIconClass(type: string | undefined): string {
    switch (type) {
      case 'success':
        return ' text-green-500 border-green-200 !bg-green-100';
      case 'error':
        return 'text-red-500 border-red-300 !bg-red-100';
      case 'info':
        return 'text-black border-gray-300 !bg-gray-50';
      default:
        return 'text-black border-gray-300 !bg-gray-50';
    }
  }
}
