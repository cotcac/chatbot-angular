import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  baseUrl: string = environment.baseUrl;
  isAuth: boolean;
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  logout(){
    this._loginService.logout();
    this._loginService.cast.subscribe(res=>{
      this.isAuth = res;
      this._router.navigate(['login']);
    })
  }
  ngOnInit() {
    this._loginService.cast.subscribe(res =>{
      this.isAuth = res;
    });
    this._loginService.getHome().subscribe(
      (res=>{
        console.log(res);

      })
    )
  }

}
