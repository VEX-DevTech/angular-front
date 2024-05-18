import {inject} from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const route = inject(Router);
  if(localStorage.getItem('token')) {
    return true;
  } else {
    route.navigate(['/login']);
    return false;
  }
};
