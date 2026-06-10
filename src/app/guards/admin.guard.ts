import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {

  const router = inject(Router);

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || '{}'
  );

  if (
    currentUser &&
    currentUser.role === 'Admin'
  ) {

    return true;

  }

  router.navigate(['/events']);

  return false;

};