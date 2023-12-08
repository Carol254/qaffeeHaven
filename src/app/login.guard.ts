import { CanActivateFn, Router } from '@angular/router';
import { FirebaseService } from './demo-services/firebase.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  if (inject(FirebaseService).checkLogInStatus()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  };
};
