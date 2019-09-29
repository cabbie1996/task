import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  isLoggedIn(): boolean {
    let token = localStorage.getItem('access_token');
    if (token != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
@Injectable()
export class AlwaysAuthService implements CanActivate {
  constructor() { }
  canActivate() {
    return true;
  }
}
@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: AuthenicationService, private router: Router) { }
  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/']);
    }
  }
}
@Injectable()
export class OnlyLoggedOutUsersGuard implements CanActivate {
  constructor(private userService: AuthenicationService, private router: Router) { }
  canActivate() {
    if (!this.userService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/dashboard/home']);
    }
  }
}