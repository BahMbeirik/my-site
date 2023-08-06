import { Component, OnInit,Inject } from '@angular/core';
import {Route, Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import { TranslateService } from '@ngx-translate/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  token:any;
  userData:any
  Router: any;
  email : any;
  id! :number
  menuVariable:boolean =false;
  menu_icon_variable:boolean = false;
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
  
  constructor(@Inject(DOCUMENT) private document: Document,private route : Router,public translate: TranslateService ) {
    translate.addLangs(['fr','en', 'ar']);
    translate.setDefaultLang('fr');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.userData = jwt_decode(this.token)
    this.email = this.userData.user_email.substring(0,this.userData.user_email.indexOf("@"))
    this.id = this.userData.user_id

  }


  logout(){
    location.reload();
    localStorage.removeItem('token');
    this.route.navigate(['/login'])

  }

  checkCheckBoxvalue(event: any ){
    if(event.target.checked == true)
    {
      this.document.body.classList.add('test');
    }
    else
    {
      this.document.body.classList.remove('test');
    }
    
  }
}
