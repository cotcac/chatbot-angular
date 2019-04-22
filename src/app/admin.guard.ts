import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: LoginService,
    private router: Router
    ){}
  canActivate(): boolean {
    if(this.authService.isLogin){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
