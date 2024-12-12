import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastConfig {
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  maxToasts?: number;
  duration?: number;
  floating?: boolean;
}

export const TOAST_CONFIG = new InjectionToken<ToastConfig>('ToastConfig');

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  message?: string;
  duration?: number;
  floating?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: ToastMessage[] = [];
  private toastsSubject = new BehaviorSubject<ToastMessage[]>(this.toasts);
  toasts$ = this.toastsSubject.asObservable();

  private position: string;
  private maxToasts: number;
  private duration: number;
  private floating: boolean;

  constructor(@Inject(TOAST_CONFIG) config: ToastConfig) {
    this.position = config.position ?? 'top-right'; // Position par défaut
    this.maxToasts = config.maxToasts ?? 5;
    this.duration = config.duration ?? 5000;
    this.floating = config.floating ?? false;
  }

  addToast(toast: Omit<ToastMessage, 'id'>): void {
    const id = crypto.randomUUID();
    const newToast = { ...toast, id };

    this.toasts.push(newToast);

    // Limiter le nombre de toasts visibles
    if (this.toasts.length > this.maxToasts) {
      this.toasts.shift(); // Supprimer le plus ancien
    }

    this.toastsSubject.next([...this.toasts]);

    if (!toast.floating && !this.floating) {
      setTimeout(() => this.removeToast(id), toast.duration ?? this.duration);
    }
  }

  success(title: string, floating?: boolean) {
    this.addToast({
      type: 'success',
      title,
      floating,
    });
  }

  error(title: string, floating?: boolean) {
    this.addToast({
      type: 'error',
      title,
      floating,
    });
  }

  info(title: string, floating?: boolean) {
    this.addToast({
      type: 'info',
      title,
      floating,
    });
  }

  removeToast(id: string): void {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.toastsSubject.next([...this.toasts]);
  }

  getPosition(): string {
    return this.position;
  }
}
